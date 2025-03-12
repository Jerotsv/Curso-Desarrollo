import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cas-greeting',
  imports: [CommonModule],
  template: `
    <div class="saludo">
      <h1>{{ saludo }}</h1>
      <input
        (ngModel)="(nombre)"
        (ngModelChange)="actualizarSaludo()"
        placeholder="Pon tu nombre"
      />
      <button (click)="borrar()">Borrar</button>
    </div>
  `,
  styles: `
    .saludo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    input {
      padding: 5px;
      font-size: 16px;
    }
    button {
      padding: 5px 10px;
      font-size: 16px;
      cursor: pointer;
    }
  `,
})
export class GreetingComponent {
  nombre = '';
  saludo = 'Hola amigo';

  // Esta función se llama cuando cambia el input
  actualizarSaludo() {
    this.saludo = this.nombre ? `Hola ${this.nombre}` : 'Hola amigo';
  }

  // Restaura el saludo original
  borrar() {
    this.nombre = '';
    this.saludo = 'Hola amigo';
  }
}
