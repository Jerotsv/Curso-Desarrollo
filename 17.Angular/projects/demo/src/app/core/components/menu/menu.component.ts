/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type MenuItem = {
  path: string;
  label: string;
};

@Component({
  selector: 'cas-menu',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of items; track item.path) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{
              item.label
            }}</a>
          </li>
        }
        @if (isLogin) {
          <li>
            <a [href]="'/profile'">Profile</a>
          </li>
          <li>
            <a [href]="'/logout'">Logout</a>
          </li>
        } @else {
          <li>
            <a [href]="'/login'">Login</a>
          </li>
          <li>
            <a [href]="'/register'">Register</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
    nav {
      background-color: #333;
      color: white;
    }
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;
    }
    li {
      padding: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .active {
      font-weight: bold;
      transform: scale(1.1);
    }
  `,
})
export class MenuComponent {
  items: MenuItem[];
  isLogin = false;
  constructor() {
    this.items = [
      {
        path: '/home',
        label: 'Home',
      },
      {
        path: '/films',
        label: 'Films',
      },
      {
        path: '/about',
        label: 'About',
      },
    ];
  }
}
