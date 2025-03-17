import { computed, inject, Injectable, signal } from '@angular/core';
import { Film } from '../../../films/types/film';
import { RepoService } from './repo.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _films = signal<Film[]>([]);
  private films = computed(() => this._films());
  repo = inject(RepoService);
  constructor() {
    this.repo.loadFilms().then((films) => {
      this._films.set(films);
      console.log(this._films());
    });
  }

  getFilms() {
    return this.films;
  }

  deleteFilm(id: string) {
    // deleteRepo
    this._films.set(this._films().filter((film) => film.id !== id));
  }

  addFilm(film: Film) {
    try {
      // addRepo
      this._films.set([...this._films(), film]);
    } catch (_) {
      // feedback al usuario
      console.log(_);
    }
  }

  updateFilm(film: Film) {
    // updateRepo
    this._films.set(
      this._films().map((f) =>
        f.id === film.id
          ? { ...f, title: film.title, releaseYear: film.releaseYear }
          : f,
      ),
    );
  }
}
