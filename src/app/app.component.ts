import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <main>
    <h1>{{defHeader}}</h1>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defHeader = 'ColesHeader';
}
