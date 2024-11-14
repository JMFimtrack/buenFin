import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buen-fin';

  handleEvent($event: Event) {
    alert('Redirect');
  }

  buen($event: Event) {
    window.location.href = "https://www.elbuenfin.org/consultaQR/5b661066-7f88-488b-a1b9-37db12405014";
  }
}
