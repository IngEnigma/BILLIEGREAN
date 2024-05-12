import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-ingresar-datos',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './ingresar-datos.component.html',
  styleUrl: './ingresar-datos.component.css'
})
export class IngresarDatosComponent {

}
