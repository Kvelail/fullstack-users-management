import 'dotenv/config';

import express, { Application, Request, NextFunction } from 'express';

import { userRoutes } from './routes/userRoutes';

// express app
const app: Application = express();

// middlewares
app.use(express.json());

app.use((req: Request, _, next: NextFunction) => {
    console.log(req.method + ' at ' + req.path);

    next();
});

// routes
app.use('/api/users', userRoutes);

// listen for requests
app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);
