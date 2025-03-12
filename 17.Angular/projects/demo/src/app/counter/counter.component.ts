import { Component } from '@angular/core';

@Component({
  selector: 'cas-contador',
  imports: [],
  template: `
    <div class="contador">
      <button (click)="cambiarContador(-1)">-</button>
      <p [class]="{ negativo: contador < 0 }">{{ contador }}</p>
      <button (click)="cambiarContador(1)">+</button>
    </div>
  `,
  styles: [
    `
      .contador {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 20px;
      }
      button {
        width: 40px;
        height: 40px;
        font-size: 18px;
        cursor: pointer;
      }
      .negativo {
        color: red;
        font-weight: bold;
      }
    `,
  ],
})
export class ContadorComponent {
  contador = 0;

  cambiarContador(valor: number) {
    this.contador += valor;
  }
}
