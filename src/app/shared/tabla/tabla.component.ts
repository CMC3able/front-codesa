import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  template: `
    <table mat-table [dataSource]="personas" class="mat-elevation-z8">
      <ng-container matColumnDef="nombre">
        <th mat-header-cell *matHeaderCellDef> Nombre </th>
        <td mat-cell *matCellDef="let persona"> {{ persona.nombre }} </td>
      </ng-container>

      <ng-container matColumnDef="acciones">
        <th mat-header-cell *matHeaderCellDef> Acciones </th>
        <td mat-cell *matCellDef="let persona">
          <button mat-icon-button (click)="editar.emit(persona)">
            <mat-icon>edit</mat-icon>
          </button>
          <button mat-icon-button (click)="eliminar.emit(persona)">
            <mat-icon>delete</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="['nombre', 'acciones']"></tr>
      <tr mat-row *matRowDef="let row; columns: ['nombre', 'acciones'];"></tr>
    </table>
  `,
})
export class TablaComponent{
  @Input() personas: any[] = [];
  @Output() editar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();

  columnas: string[] = ['nombre', 'apellido', 'acciones'];

}
