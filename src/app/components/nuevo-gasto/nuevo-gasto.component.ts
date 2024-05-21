import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nuevo-gasto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nuevo-gasto.component.html',
  styleUrl: './nuevo-gasto.component.css'
})
export class NuevoGastoComponent {

}
