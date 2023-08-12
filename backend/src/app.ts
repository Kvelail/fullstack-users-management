import express, { Application, Request, Response, NextFunction } from 'express';

// express app
const app: Application = express();

// routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello Route');
});

// listen for requests
app.listen(4000, () => console.log('listening on port 4000'));
