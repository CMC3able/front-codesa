import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Estudiante } from '../../interfaces/personas.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { EstudiantesService } from '../../services/estudiantes.service';
import { ModalService } from '../../shared/modal.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-estudiantes',
  imports: [MatIconModule, CommonModule, MatTableModule, TablaComponent, MatButtonModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit {

  listaEstudiantes: Estudiante[] = [];
  listaPersonas: any[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'fechaNacimiento', 'email', 'telefono', 'numeroMatricula', 'grado'];

    @ViewChild('contentBody') contentBodyRed!: TemplateRef<HTMLElement>;
    constructor(private estudiantesServices: EstudiantesService,
      private readonly modalServices: ModalService
    ) {}
  
    ngOnInit() {
      this.estudiantesServices.getAllEstudiantes().subscribe(data => {
        this.listaEstudiantes = data;
        this.listaPersonas = data.map(item => ({...item, ...item.persona, persona: undefined}));
        console.log(this.listaEstudiantes);
      });
    }
  
    editarPersona(e: Estudiante) {
      console.log('Editar:', e);
    }
  
    eliminarPersona(e: Estudiante) {
      console.log('Eliminar:', e);
    }

    abriModal() {
    this.modalServices.openDialog(this.contentBodyRed);
  }
}
