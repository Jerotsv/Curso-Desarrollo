import createDebug from 'debug'; // Importa la función createDebug del módulo debug

const debug = createDebug('films:dto:users'); // Crea una instancia de debug con el namespace 'films:dto:users'
debug('Loading users DTO'); // Muestra un mensaje de debug indicando que se está cargando el DTO de usuarios

import { z } from 'zod'; // Importa el módulo zod para validación de esquemas

export const UserCreateDTO = z.object({
    username: z.string().min(3).max(255).nonempty(), // Define un campo username que debe ser una cadena no vacía de entre 3 y 255 caracteres
    password: z.string().min(8).max(255).nonempty(), // Define un campo password que debe ser una cadena no vacía de entre 8 y 255 caracteres
    email: z.string().email().nonempty(), // Define un campo email que debe ser una cadena no vacía con formato de email
}); // Define un esquema de validación para la creación de usuarios

export type UserCreateDTO = z.infer<typeof UserCreateDTO>; // Define un tipo TypeScript basado en el esquema de validación
