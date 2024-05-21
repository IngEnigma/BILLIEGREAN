import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

}
