import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Inscripciones } from '../../interfaces/personas.interface';
import { InscripcionesService } from '../../services/inscripciones.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalService } from '../../shared/modal.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inscripciones',
  imports: [CommonModule, MatTableModule, TablaComponent, MatIconModule, MatButtonModule],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent implements OnInit{
  listaInscripciones: Inscripciones[] = [];
  listaPersonas: any[] = [];
  displayedColumns: string[] = ['nombreEstudiante', 'apellidoEstudiante', 'nombreCurso', 'nombreProfesor', 'apellidoProfesor', 'fechaInscripcion'];
      
    @ViewChild('contentBody') contentBodyRed!: TemplateRef<HTMLElement>;
    constructor(private inscripcionesServices: InscripcionesService,
      private readonly modalServices: ModalService
    ) {}
        
    ngOnInit() {
      this.inscripcionesServices.getAllInscripciones().subscribe(data => {
        this.listaInscripciones = data;
        const datainscripcion = data.map(inscripcion => ({
          inscripcion: {
            fechaInscripcion: inscripcion?.fechaInscripcion
          },
          curso: {
            idCurso: inscripcion.curso?.id,
            nombreCurso: inscripcion.curso?.nombre,
            descripcion: inscripcion.curso?.descripcion,
            creditos: inscripcion.curso?.creditos
          },
          estudiante: {
            idEstudiante: inscripcion.estudiante?.id,
            numeroMatricula: inscripcion.estudiante?.numeroMatricula,
            grado: inscripcion.estudiante?.grado,
          },
          persona: {
            idPersona: inscripcion.estudiante.persona?.id,
            nombreEstudiante: inscripcion.estudiante.persona?.nombre,
            apellidoEstudiante: inscripcion.estudiante.persona?.apellido,
            nombreProfesor: inscripcion.curso.profesor.persona?.nombre,
            apellidoProfesor: inscripcion.curso.profesor.persona?.apellido,
            fechaNacimiento: inscripcion.estudiante.persona?.fechaNacimiento,
            email: inscripcion.estudiante.persona?.email,
            telefono: inscripcion.estudiante.persona?.telefono,
          }
        }));
        this.listaPersonas = datainscripcion.map(item => ({...item.inscripcion, ...item.curso, ...item.estudiante, ...item.persona, inscripcion: undefined, curso: undefined, estudiante: undefined,  persona: undefined}));
        console.log(this.listaPersonas);
        });
      }
        
      editarPersona(i: Inscripciones) {
        console.log('Editar:', i);
      }
        
      eliminarPersona(i: Inscripciones) {
        console.log('Eliminar:', i);
      }

      abriModal() {
    this.modalServices.openDialog(this.contentBodyRed);
  }
}
