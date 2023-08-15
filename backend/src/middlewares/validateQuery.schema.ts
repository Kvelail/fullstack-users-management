import Joi from 'joi';

// models
import { NextFunction, Request, Response } from 'express';

const validateQuery = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const params = req.params;

    console.log('params', params);

    // create schema object
    const schema: Joi.ObjectSchema<{ id: string }> = Joi.object({
        id: Joi.string().uuid().required(),
    });

    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };

    // validate request params against schema
    const { error } = schema.validate(params, options);

    if (error) {
        // on fail return comma separated errors
        res.status(422).json(
            `Validation error: ${error.details
                .map((err) => err.message)
                .join(', ')}`
        );
    } else {
        next();
    }
};

export { validateQuery };
