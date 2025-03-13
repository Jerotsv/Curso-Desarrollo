import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CounterSignalComponent } from './counter.signal/counter.signal.component';

@Component({
  selector: 'cas-about',
  imports: [CounterComponent, GreetingComponent, CounterSignalComponent],
  template: `
    <h2>About</h2>
    <p>Esta aplicación es una demo del uso de Angular</p>
    <p>A continuación, un ejemplo de componente contador</p>
    <cas-counter></cas-counter>
    <p>A continuación, un ejemplo de un componente que saluda al usuario</p>
    <cas-greeting></cas-greeting>
    <p>A continuación, un ejemplo de componente contador con Signal</p>
    <cas-counter-signal></cas-counter-signal>
  `,
  styles: ``,
})
export default class AboutComponent {}
