import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-administrativos',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './administrativos.component.html',
  styleUrl: './administrativos.component.css'
})
export class AdministrativosComponent {

}
