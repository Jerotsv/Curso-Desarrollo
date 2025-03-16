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

import express from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

// Esquemas de validación con Zod
const clienteSchema = z.object({
    nombre: z.string().min(1),
    telefono: z.string().min(1),
    email: z.string().email(),
});

const pistaSchema = z.object({
    numero: z.number(),
    tipo: z.enum(['cubierta', 'exterior']),
    precio_hora: z.number(),
    estado: z.enum(['disponible', 'ocupada']),
});

const empleadoSchema = z.object({
    nombre: z.string().min(1),
    telefono: z.string().min(1),
    email: z.string().email(),
    cargo: z.string().min(1),
});

// Rutas agrupadas usando `app.route()`
app.route('/clientes')
    .get(async (_, res) => {
        try {
            const clientes = await prisma.cliente.findMany();
            res.json(clientes);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener clientes' });
        }
    })
    .post(async (req, res) => {
        try {
            const data = clienteSchema.parse(req.body);
            const nuevoCliente = await prisma.cliente.create({ data });
            res.json(nuevoCliente);
        } catch (error) {
            res.status(400).json({ error: error.errors });
        }
    });

app.route('/clientes/:id')
    .get(async (req, res) => {
        try {
            const cliente = await prisma.cliente.findUnique({
                where: { id: Number(req.params.id) },
            });
            cliente
                ? res.json(cliente)
                : res.status(404).json({ error: 'Cliente no encontrado' });
        } catch {
            res.status(500).json({ error: 'Error al buscar el cliente' });
        }
    })
    .put(async (req, res) => {
        try {
            const data = clienteSchema.parse(req.body);
            const clienteActualizado = await prisma.cliente.update({
                where: { id: Number(req.params.id) },
                data,
            });
            res.json(clienteActualizado);
        } catch {
            res.status(400).json({ error: 'Error al actualizar el cliente' });
        }
    })
    .delete(async (req, res) => {
        try {
            await prisma.cliente.delete({
                where: { id: Number(req.params.id) },
            });
            res.json({ message: 'Cliente eliminado' });
        } catch {
            res.status(500).json({ error: 'Error al eliminar el cliente' });
        }
    });

// Se repite la estructura para pistas y empleados
app.route('/pistas')
    .get(async (_, res) => {
        try {
            const pistas = await prisma.pista.findMany();
            res.json(pistas);
        } catch {
            res.status(500).json({ error: 'Error al obtener pistas' });
        }
    })
    .post(async (req, res) => {
        try {
            const data = pistaSchema.parse(req.body);
            const nuevaPista = await prisma.pista.create({ data });
            res.json(nuevaPista);
        } catch {
            res.status(400).json({ error: 'Datos inválidos para la pista' });
        }
    });

app.route('/pistas/:id')
    .get(async (req, res) => {
        try {
            const pista = await prisma.pista.findUnique({
                where: { id_pista: Number(req.params.id) },
            });
            pista
                ? res.json(pista)
                : res.status(404).json({ error: 'Pista no encontrada' });
        } catch {
            res.status(500).json({ error: 'Error al buscar la pista' });
        }
    })
    .put(async (req, res) => {
        try {
            const data = pistaSchema.parse(req.body);
            const pistaActualizada = await prisma.pista.update({
                where: { id_pista: Number(req.params.id) },
                data,
            });
            res.json(pistaActualizada);
        } catch {
            res.status(400).json({ error: 'Error al actualizar la pista' });
        }
    })
    .delete(async (req, res) => {
        try {
            await prisma.pista.delete({
                where: { id_pista: Number(req.params.id) },
            });
            res.json({ message: 'Pista eliminada' });
        } catch {
            res.status(500).json({ error: 'Error al eliminar la pista' });
        }
    });

app.route('/empleados')
    .get(async (_, res) => {
        try {
            const empleados = await prisma.empleado.findMany();
            res.json(empleados);
        } catch {
            res.status(500).json({ error: 'Error al obtener empleados' });
        }
    })
    .post(async (req, res) => {
        try {
            const data = empleadoSchema.parse(req.body);
            const nuevoEmpleado = await prisma.empleado.create({ data });
            res.json(nuevoEmpleado);
        } catch {
            res.status(400).json({ error: 'Datos inválidos para el empleado' });
        }
    });

app.route('/empleados/:id')
    .get(async (req, res) => {
        try {
            const empleado = await prisma.empleado.findUnique({
                where: { id_empleado: Number(req.params.id) },
            });
            empleado
                ? res.json(empleado)
                : res.status(404).json({ error: 'Empleado no encontrado' });
        } catch {
            res.status(500).json({ error: 'Error al buscar el empleado' });
        }
    })
    .put(async (req, res) => {
        try {
            const data = empleadoSchema.parse(req.body);
            const empleadoActualizado = await prisma.empleado.update({
                where: { id_empleado: Number(req.params.id) },
                data,
            });
            res.json(empleadoActualizado);
        } catch {
            res.status(400).json({ error: 'Error al actualizar el empleado' });
        }
    })
    .delete(async (req, res) => {
        try {
            await prisma.empleado.delete({
                where: { id_empleado: Number(req.params.id) },
            });
            res.json({ message: 'Empleado eliminado' });
        } catch {
            res.status(500).json({ error: 'Error al eliminar el empleado' });
        }
    });

// Middleware global de manejo de errores
app.use((err: any, _: any, res: any, __: any) => {
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
);

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
