import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuComponent } from './core/components/menu/menu.component';

@Component({
  selector: 'cas-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent],
  template: `
    <cas-header>
      <cas-menu />
    </cas-header>
    <main>
      <router-outlet />
      <!-- Página elegida -->
    </main>
    <cas-footer />
  `,
  styles: [
    `
      main {
        margin: 3rem;
      }
    `,
  ],
})
export class AppComponent {}
