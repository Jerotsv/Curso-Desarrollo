import { createServer } from 'node:http';
import type { IncomingMessage, ServerResponse } from 'node:http';
import 'dotenv/config';
import createDebug from 'debug';

const debug = createDebug('app:server');

const PORT = process.env.PORT || 3000;

const createHtmlString = (title: string, Content: string) => `

const appRouter = (request: IncomingMessage, response: ServerResponse) => {
    const { url, method } = request;

    if (!url) {
        response.statusCode = 404;
        response.end('Not found');
        return;
    }

    debug(method, 'Request received', url);
    response.statusCode = 200; //valor por defecto
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end('Página de inicio');
};

const server = createServer(appRouter);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    debug(`Server running on http://localhost:${PORT}`);
});
