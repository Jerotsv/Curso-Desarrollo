import express, { Request, Response } from 'express';

export const app = express();

app.disable('x-powered-by');

const controller = (req: Request, res: Response) => {
    res.send('Hola Mundo');
};

app.post('/', controller);
app.put('/');
app.delete('/');
app.patch('/');

app.use('*', (req: Request, res: Response) => {
    res.status(404);
    res.send('Not Found');
});
