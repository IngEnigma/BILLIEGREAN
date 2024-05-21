import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-grafica-gastos',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './grafica-gastos.component.html',
  styleUrl: './grafica-gastos.component.css'
})
export class GraficaGastosComponent {

}
