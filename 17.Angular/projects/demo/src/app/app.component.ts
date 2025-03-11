import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cas-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hola {{ title }}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'demo';
}
