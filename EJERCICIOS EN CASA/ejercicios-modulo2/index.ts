// import express, { Request, Response, NextFunction } from 'express';
// import { PrismaClient } from '@prisma/client';
// import { z } from 'zod';

// const app = express();
// const prisma = new PrismaClient();
// app.use(express.json());

// // Middleware de manejo de errores
// type ErrorHandler = (
//     err: Error,
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => void;
// const errorHandler: ErrorHandler = (err, req, res, next) => {
//     console.error(err);
//     res.status(500).json({ error: 'Ocurrió un error en el servidor' });
// };
// app.use(errorHandler);

// // Esquemas de validación con Zod
// const clienteSchema = z.object({
//     nombre: z.string().min(1),
//     telefono: z.string().min(1),
//     email: z.string().email(),
// });
// const pistaSchema = z.object({
//     numero: z.number(),
//     tipo: z.enum(['cubierta', 'exterior']),
//     precio_hora: z.number().positive(),
//     estado: z.enum(['disponible', 'ocupada']),
// });
// const empleadoSchema = z.object({
//     nombre: z.string().min(1),
//     telefono: z.string().min(1),
//     email: z.string().email(),
//     cargo: z.string().min(1),
// });

// // Clase para manejar la base de datos
// class Database {
//     static async createCliente(data: any) {
//         return await prisma.cliente.create({ data });
//     }
//     static async createPista(data: any) {
//         return await prisma.pista.create({ data });
//     }
//     static async createEmpleado(data: any) {
//         return await prisma.empleado.create({ data });
//     }
//     static async getClientes() {
//         return await prisma.cliente.findMany();
//     }
//     static async getPistas() {
//         return await prisma.pista.findMany();
//     }
//     static async getEmpleados() {
//         return await prisma.empleado.findMany();
//     }
//     static async deleteCliente(id: number) {
//         return await prisma.cliente.delete({ where: { id } });
//     }
//     static async deletePista(id_pista: number) {
//         return await prisma.pista.delete({ where: { id_pista } });
//     }
//     static async deleteEmpleado(id_empleado: number) {
//         return await prisma.empleado.delete({ where: { id_empleado } });
//     }
// }

// // Rutas CRUD
// app.post('/clientes', async (req, res, next) => {
//     try {
//         const data = clienteSchema.parse(req.body);
//         const cliente = await Database.createCliente(data);
//         res.status(201).json(cliente);
//     } catch (error) {
//         next(error);
//     }
// });
// app.get('/clientes', async (req, res, next) => {
//     try {
//         res.json(await Database.getClientes());
//     } catch (error) {
//         next(error);
//     }
// });
// app.delete('/clientes/:id', async (req, res, next) => {
//     try {
//         await Database.deleteCliente(parseInt(req.params.id));
//         res.status(204).send();
//     } catch (error) {
//         next(error);
//     }
// });

// app.post('/pistas', async (req, res, next) => {
//     try {
//         const data = pistaSchema.parse(req.body);
//         const pista = await Database.createPista(data);
//         res.status(201).json(pista);
//     } catch (error) {
//         next(error);
//     }
// });
// app.get('/pistas', async (req, res, next) => {
//     try {
//         res.json(await Database.getPistas());
//     } catch (error) {
//         next(error);
//     }
// });
// app.delete('/pistas/:id', async (req, res, next) => {
//     try {
//         await Database.deletePista(parseInt(req.params.id));
//         res.status(204).send();
//     } catch (error) {
//         next(error);
//     }
// });

// app.post('/empleados', async (req, res, next) => {
//     try {
//         const data = empleadoSchema.parse(req.body);
//         const empleado = await Database.createEmpleado(data);
//         res.status(201).json(empleado);
//     } catch (error) {
//         next(error);
//     }
// });
// app.get('/empleados', async (req, res, next) => {
//     try {
//         res.json(await Database.getEmpleados());
//     } catch (error) {
//         next(error);
//     }
// });
// app.delete('/empleados/:id', async (req, res, next) => {
//     try {
//         await Database.deleteEmpleado(parseInt(req.params.id));
//         res.status(204).send();
//     } catch (error) {
//         next(error);
//     }
// });

// app.listen(3000, () => console.log('Servidor en http://localhost:3000'));

// CREATE SCHEMA IF NOT EXISTS `Club_de_padel` DEFAULT CHARACTER SET utf8 ;
// USE `Club_de_padel` ;

// -- -----------------------------------------------------
// -- Table `Club_de_padel`.`cliente`
// -- -----------------------------------------------------
// CREATE TABLE IF NOT EXISTS `Club_de_padel`.`cliente` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `nombre` VARCHAR(45) NOT NULL,
//   `teléfono` VARCHAR(20) NOT NULL,
//   `email` VARCHAR(45) NOT NULL,
//   PRIMARY KEY (`id_cliente`),
//   UNIQUE INDEX `teléfono_UNIQUE` (`teléfono` ASC) VISIBLE,
//   UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
// ENGINE = InnoDB;

// -- -----------------------------------------------------
// -- Table `Club_de_padel`.`pista`
// -- -----------------------------------------------------
// CREATE TABLE IF NOT EXISTS `Club_de_padel`.`pista` (
//   `id_pista` INT NOT NULL AUTO_INCREMENT,
//   `número` INT NOT NULL,
//   `tipo` ENUM('cubierta', 'exterior') NOT NULL,
//   `precio_hora` DECIMAL(2,2) NOT NULL,
//   `estado` ENUM('disponible', 'ocupada') NOT NULL,
//   PRIMARY KEY (`id_pista`),
//   UNIQUE INDEX `número_UNIQUE` (`número` ASC) VISIBLE)
// ENGINE = InnoDB;

// -- -----------------------------------------------------
// -- Table `Club_de_padel`.`empleado`
// -- -----------------------------------------------------
// CREATE TABLE IF NOT EXISTS `Club_de_padel`.`empleado` (
//   `id_empleado` INT NOT NULL AUTO_INCREMENT,
//   `nombre` VARCHAR(45) NOT NULL,
//   `teléfono` VARCHAR(20) NOT NULL,
//   `email` VARCHAR(45) NOT NULL,
//   `cargo` VARCHAR(45) NOT NULL,
//   PRIMARY KEY (`id_empleado`),
//   UNIQUE INDEX `teléfono_UNIQUE` (`teléfono` ASC) VISIBLE,
//   UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
// ENGINE = InnoDB;

// Importamos las dependencias necesarias
import express, { Request, Response } from 'express';

// Creamos la instancia de la aplicación Express
const app = express();
// Definimos el puerto donde se va a escuchar el servidor
const port = 3000;

// Usamos middleware para poder parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Simulamos una "base de datos" en memoria donde almacenamos los productos
let products: {
    id: string;
    name: string;
    price: number;
    description: string;
}[] = [];

// Ruta GET para obtener todos los productos
app.get('/api/products', (req: Request, res: Response) => {
    // Enviamos la lista completa de productos como respuesta
    res.json(products);
});

// Ruta POST para crear un nuevo producto
app.post('/api/products', (req: Request, res: Response) => {
    // Obtenemos los datos del cuerpo de la solicitud
    const { name, price, description } = req.body;

    // Creamos un nuevo producto con un ID único generado aleatoriamente
    const newProduct = {
        id: Math.random().toString(36).substring(2, 9), // Generamos un ID único usando un valor aleatorio
        name,
        price,
        description,
    };

    // Agregamos el nuevo producto a la lista de productos
    products.push(newProduct);

    // Respondemos con el nuevo producto creado y el código HTTP 201 (Creado)
    res.status(201).json(newProduct);
});

// Ruta GET para obtener un producto por su ID
app.get('/api/products/:id', (req: Request, res: Response) => {
    // Obtenemos el ID del producto desde los parámetros de la URL
    const { id } = req.params;

    // Buscamos el producto por su ID
    const product = products.find((p) => p.id === id);

    // Si encontramos el producto, lo devolvemos en la respuesta
    if (product) {
        res.json(product);
    } else {
        // Si no encontramos el producto, respondemos con un error 404
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta PUT para actualizar un producto por su ID
app.put('/api/products/:id', (req: Request, res: Response) => {
    // Obtenemos el ID del producto desde los parámetros de la URL
    const { id } = req.params;

    // Obtenemos los nuevos datos del producto desde el cuerpo de la solicitud
    const { name, price, description } = req.body;

    // Buscamos el producto por su ID
    const product = products.find((p) => p.id === id);

    // Si encontramos el producto, lo actualizamos con los nuevos datos
    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;

        // Respondemos con el producto actualizado
        res.json(product);
    } else {
        // Si no encontramos el producto, respondemos con un error 404
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta DELETE para eliminar un producto por su ID
app.delete('/api/products/:id', (req: Request, res: Response) => {
    // Obtenemos el ID del producto desde los parámetros de la URL
    const { id } = req.params;

    // Buscamos el índice del producto en la lista
    const index = products.findIndex((p) => p.id === id);

    // Si encontramos el producto, lo eliminamos de la lista
    if (index !== -1) {
        products.splice(index, 1);
        // Respondemos con un código 204 (sin contenido) indicando que la eliminación fue exitosa
        res.status(204).send();
    } else {
        // Si no encontramos el producto, respondemos con un error 404
        res.status(404).send('Producto no encontrado');
    }
});

// Iniciamos el servidor y lo hacemos escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
