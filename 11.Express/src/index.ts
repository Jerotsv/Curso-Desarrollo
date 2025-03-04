import { createServer } from 'node:http'; // Importa la función createServer del módulo http de Node.js
import type { ServerResponse } from 'node:http'; // Importa el tipo ServerResponse del módulo http de Node.js
import 'dotenv/config'; // Carga las variables de entorno desde un archivo .env
import createDebug from 'debug'; // Importa la función createDebug del módulo debug
import { HttpError } from './http-error.js'; // Importa la clase HttpError del archivo http-error.js
import { createHtmlString } from './template.js'; // Importa la función createHtmlString del archivo template.js

import { app } from './app.js'; // Importa la aplicación Express desde el archivo app.js

const debug = createDebug('demo:server'); // Crea una instancia de debug con el namespace 'demo:server'
debug('Iniciando servidor...'); // Muestra un mensaje de debug indicando que el servidor está iniciando
const PORT = process.env.PORT || 3000; // Obtiene el puerto desde las variables de entorno o usa el puerto 3000 por defecto

const listenManager = () => {
    const addr = server.address(); // Obtiene la dirección del servidor
    if (addr === null) return; // Si la dirección es nula, no hace nada
    let bind: string;
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr; // Si la dirección es una cadena, la usa como un pipe
    } else {
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}` // Si la dirección es '::', usa localhost con el puerto
                : `${addr.address}:${addr?.port}`; // De lo contrario, usa la dirección y el puerto
    }
    console.log(`Server listening on ${bind}`); // Muestra un mensaje en la consola indicando que el servidor está escuchando
    debug(`Servidor escuchando en ${bind}`); // Muestra un mensaje de debug indicando que el servidor está escuchando
};

const errorManager = (error: Error | HttpError, response: ServerResponse) => {
    if (!('status' in error)) {
        error = {
            ...error,
            statusCode: 500, // Asigna el código de estado 500 si no existe
            status: 'Internal Server Error', // Asigna el estado 'Internal Server Error' si no existe
        };
    }

    const publicMessage = `Error: ${error.statusCode} ${error.status}`; // Crea un mensaje público con el código de estado y el estado
    debug(publicMessage, error.message); // Muestra un mensaje de debug con el mensaje público y el mensaje de error

    const html = createHtmlString(
        'Error | Node Server',
        'Error',
        publicMessage,
    ); // Crea una cadena HTML con el título, encabezado y mensaje público
    response.statusCode = error.statusCode; // Asigna el código de estado a la respuesta
    response.statusMessage = error.status; // Asigna el mensaje de estado a la respuesta
    response.setHeader('Content-Type', 'text/html; charset=utf-8'); // Establece el encabezado Content-Type de la respuesta
    response.end(html); // Finaliza la respuesta con la cadena HTML
};

const server = createServer(app); // Crea un servidor HTTP con la aplicación Express
server.listen(PORT); // Hace que el servidor escuche en el puerto especificado
server.on('listening', listenManager); // Asigna el manejador de eventos listenManager al evento 'listening'
server.on('error', errorManager); // Asigna el manejador de eventos errorManager al evento 'error'
