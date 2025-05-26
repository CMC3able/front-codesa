import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Curso, Profesor } from '../../interfaces/personas.interface';
import { CursosService } from '../../services/cursos.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalService } from '../../shared/modal.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, MatTableModule, TablaComponent, MatIconModule, MatButtonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{
  listaCursos: Curso[] = [];
    listaPersonas: any[] = [];
    displayedColumns: string[] = ['nombreCurso', 'descripcion', 'creditos', 'nombrePersona', 'apellidoPersona'];
    
    @ViewChild('contentBody') contentBodyRed!: TemplateRef<HTMLElement>;
    constructor(private cursoServices: CursosService,
      private readonly modalServices: ModalService
    ) {}
      
    ngOnInit() {
      this.cursoServices.getAllCursos().subscribe(data => {
        this.listaCursos = data;
        const datacurso = data.map(curso => ({
          curso: {
            idCurso: curso.id,
            nombreCurso: curso.nombre,
            descripcion: curso.descripcion,
            creditos: curso.creditos
          },
          profesor: {
            idProfesor: curso.profesor?.id,
            especialidad: curso.profesor?.especialidad,
            fechaContratacion: curso.profesor?.fechaContratacion,
          },
          persona: {
            idPersona: curso.profesor.persona?.id,
            nombrePersona: curso.profesor.persona?.nombre,
            apellidoPersona: curso.profesor.persona?.apellido,
            fechaNacimiento: curso.profesor.persona?.fechaNacimiento,
            email: curso.profesor.persona?.email,
            telefono: curso.profesor.persona?.telefono,
          }
        }));
        this.listaPersonas = datacurso.map(item => ({...item.curso, ...item.profesor, ...item.persona, profesor: undefined, curso: undefined, persona: undefined}));
        console.log(this.listaPersonas);
      });
    }
      
    editarPersona(c: Curso) {
      console.log('Editar:', c);
    }
      
    eliminarPersona(c: Curso) {
      console.log('Eliminar:', c);
    }

    abriModal() {
    this.modalServices.openDialog(this.contentBodyRed);
  }
}
