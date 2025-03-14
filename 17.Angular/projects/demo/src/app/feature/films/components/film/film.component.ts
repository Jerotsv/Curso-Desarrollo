import { Component, input, output } from '@angular/core';
import { Film } from '../../types/film';

@Component({
  selector: 'cas-film',
  imports: [],
  template: `
    <div>
      <strong>{{ film().title }}</strong> ({{ film().releaseYear }})
      <button (click)="openEdit()">Editar</button>
      <button (click)="sendDelete()">Eliminar</button>
      @if (isEditing) {
        <ng-content></ng-content>
      }
    </div>
  `,
  styles: ``,
})
export class FilmComponent {
  film = input.required<Film>();
  eventDelete = output<string>();
  isEditing = false;

  sendDelete() {
    const film = this.film() as Film;
    this.eventDelete.emit(film.id);
  }
  openEdit() {
    this.isEditing = !this.isEditing;
  }
}
