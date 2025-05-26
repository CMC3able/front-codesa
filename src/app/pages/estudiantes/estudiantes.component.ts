import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Estudiante, Persona } from '../../interfaces/personas.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { EstudiantesService } from '../../services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  imports: [MatIconModule, CommonModule, MatTableModule, TablaComponent],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit {

  listaEstudiantes: Estudiante[] = [];
  listaPersonas: Persona[] = [];

    constructor(private estudiantesServices: EstudiantesService) {}
  
    ngOnInit() {
      this.estudiantesServices.getAllEstudiantes().subscribe(data => {
        this.listaEstudiantes = data;
        console.log(this.listaEstudiantes);
      });
    }
  
    editarPersona(e: Estudiante) {
      console.log('Editar:', e);
    }
  
    eliminarPersona(e: Estudiante) {
      console.log('Eliminar:', e);
    }
}
