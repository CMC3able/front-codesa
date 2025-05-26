import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent{

  displayedColumns: string[] = ['nombre', 'apellido', 'acciones'];

  @Input() personas: any[] = [];
  @Output() editar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();

}
