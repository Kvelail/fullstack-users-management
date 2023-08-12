import Joi from 'joi';

// models
import { NextFunction, Request, Response } from 'express';
import { CreateUserDTO } from '../models/user.dto';

const createOrUpdateUserSchema = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const payload: CreateUserDTO = req.body;

    // create schema object
    const schema = Joi.object({
        email: Joi.string().email().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().required(),
    });

    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true, // remove unknown props
    };

    // validate request body against schema
    const { error, value } = schema.validate(payload, options);

    if (error) {
        // on fail return comma separated errors
        res.status(422).json(
            `Validation error: ${error.details
                .map((err) => err.message)
                .join(', ')}`
        );
    } else {
        // on success replace req.body with validated value and trigger next middleware function
        req.body = value;

        next();
    }
};

export { createOrUpdateUserSchema };
