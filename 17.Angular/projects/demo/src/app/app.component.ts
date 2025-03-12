import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { ContadorComponent } from './counter/counter.component';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'cas-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContadorComponent,
    GreetingComponent,
  ],
  template: `
    <cas-header>
      <cas-menu />
    </cas-header>
    <main>
      <p>1</p>
      <cas-contador />
      <p>2</p>
      <cas-greeting />
      <router-outlet />
    </main>
    <cas-footer />
  `,
  styles: [],
})
export class AppComponent {}
