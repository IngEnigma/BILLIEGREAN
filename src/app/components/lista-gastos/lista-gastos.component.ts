import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-lista-gastos',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './lista-gastos.component.html',
  styleUrl: './lista-gastos.component.css'
})
export class ListaGastosComponent {

}
