import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Estudiante, Persona } from '../../interfaces/personas.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { EstudiantesService } from '../../services/estudiantes.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  imports: [MatIconModule, CommonModule, MatTableModule, TablaComponent],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit {

  listaEstudiantes: Estudiante[] = [];
  listaPersonas: Persona[] = [];
  isLoginPage = false;

    constructor(private estudiantesServices: EstudiantesService, private router: Router) {}
  
    ngOnInit() {
      this.estudiantesServices.getAllEstudiantes().subscribe(data => {
        this.listaEstudiantes = data;
        console.log(this.listaEstudiantes);
      });
      this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoginPage = event.url === '/login';
      }
    });
    }
  
    editarPersona(e: Estudiante) {
      console.log('Editar:', e);
    }
  
    eliminarPersona(e: Estudiante) {
      console.log('Eliminar:', e);
    }
}
