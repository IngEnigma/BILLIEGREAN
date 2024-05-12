import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-salario-fijo',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './salario-fijo.component.html',
  styleUrl: './salario-fijo.component.css'
})
export class SalarioFijoComponent {

}
