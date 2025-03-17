import { Injectable } from '@angular/core';
import { Film } from '../../../films/types/film';
// import { FILMS } from '../../../../data/films';

type ApiResponse = {
  results: Film[];
  error: string;
};

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  url = 'http://localhost:3000/api/films';

  async loadFilms(): Promise<Film[]> {
    const response = await fetch(this.url);
    const results: ApiResponse = await response.json();
    console.log(results.results);
    return results.results;
  }

  // loadFilms(): Promise<Film[]> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(FILMS);
  //       console.log('Films loaded from API');
  //     }, 2000);
  //   });
  // }

  // async loadFilms(): Promise<Film[]> {
  //   return FILMS
  // }
}
