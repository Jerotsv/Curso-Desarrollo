async getAllMovies(): Promise<MovieRow[]> {
        const q = `select 
                    BIN_TO_UUID(movie_id) as id, 
                    title, 
                    release_year as year,  
                    director, 
                    duration, 
                    poster, 
                    rate  
                from movies`;
        const [rows] = await this.connection.query<MovieRow[]>(q);
        return rows;
    }
