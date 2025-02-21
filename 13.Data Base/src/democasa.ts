import mysql from 'mysql2/promise';

process.loadEnvFile('.env');

const openConnection = async () => {
    const dataConnection = {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME || '',
    };
    const connection = await mysql.createConnection(dataConnection);
    return connection;
};

// class ManageMovies {
//     constructor(private connection: Connection) {}

//     async  getAllMovies() {
//         const query =  'select title, director, duration from movies';
//         const [rows] = await this.connection.query(query);
//         return rows;
//     };

//     async getMovieById(id: number) {
//         const q = 'SELECT id, title, director, duration FROM movies WHERE id = ?';
//         const [rows] = await this.connection.query(q, [id]);
//         return rows;
//     }

//     async createMovie(title: string, director: string, duration: number) {
//         const query = 'insert into movies (title, director, duration) values (?, ?, ?);';
//         const [result] = await this.connection.query(query, [title, director, duration]);
//     };

//     async updateMovie(id: number, title: string, director: string, duration: number) {
//         const q = 'UPDATE movies SET title = ?, director = ?, duration = ? WHERE id = ?';
//         const [result] = await this.connection.query<ResultSetHeader>(q, [
//             title,
//             director,
//             duration,
//             id
//         ]);

//         if (result.affectedRows === 1) {
//             console.log('Película actualizada con ID:', id);
//             return this.updateMovie(id, title, director, duration);
//         }

//         return result;
//     }

//     async deleteMovie(id: number) {
//         const movieForDelete = await this.getMovieById(id);

//         const q = 'DELETE FROM movies WHERE id = ?';
//         const [result] = await this.connection.query<ResultSetHeader>(q, [id]);

//         if (result.affectedRows === 1) {
//             console.log('Película eliminada con ID:', id);
//             return movieForDelete;
//         }

//         return result;
//     };
// }

const getAllMovies = async () => {
    const connection = await openConnection();
    try {
        const [rows] = await connection.execute(
            'SELECT title, director, duration FROM movies',
        );
        console.log('Movies:', rows);
    } catch (error) {
        console.error('Error while fetching movies:', error);
    }
};

const updateMovieDuration = async (id: number, newDuration: number) => {
    const connection = await openConnection();
    try {
        const [result] = await connection.execute(
            'UPDATE movies SET duration = ? WHERE id = ?',
            [newDuration, id],
        );
        if (result.affectedRows > 0) {
            console.log(`Movie with id ${id} updated successfully.`);
        } else {
            console.log(`No movie found with id ${id}.`);
        }
    } catch (error) {
        console.error('Error while updating movie:', error);
    }
};

const deleteMovie = async (id: number) => {
    const connection = await openConnection();
    try {
        const [result] = await connection.execute(
            'DELETE FROM movies WHERE id = ?',
            [id],
        );
        if (result.affectedRows > 0) {
            console.log(`Movie with id ${id} deleted successfully.`);
        } else {
            console.log(`No movie found with id ${id}.`);
        }
    } catch (error) {
        console.error('Error while deleting movie:', error);
    }
};
