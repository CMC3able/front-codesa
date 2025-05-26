import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Profesor } from '../../interfaces/personas.interface';
import { ProfesoresService } from '../../services/profesores.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { ModalService } from '../../shared/modal.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profesores',
  imports: [MatIconModule, CommonModule, MatTableModule, TablaComponent, MatButtonModule],
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css'
})
export class ProfesoresComponent implements OnInit{
  listaProfesores: Profesor[] = [];
    listaPersonas: any[] = [];
    displayedColumns: string[] = ['nombre', 'apellido', 'fechaNacimiento', 'email', 'telefono', 'numeroMatricula', 'grado'];
  
    @ViewChild('contentBody') contentBodyRed!: TemplateRef<HTMLElement>;
    
      constructor(private profesoresServices: ProfesoresService,
        private readonly modalServices: ModalService
      ) {}
    
      ngOnInit() {
        this.profesoresServices.getAllProfesores().subscribe(data => {
          this.listaProfesores = data;
          this.listaPersonas = data.map(item => ({...item, ...item.persona, persona: undefined}));
          console.log(this.listaProfesores);
        });
      }
    
      editarPersona(p: Profesor) {
        console.log('Editar:', p);
      }
    
      eliminarPersona(p: Profesor) {
        console.log('Eliminar:', p);
      }

      abriModal() {
    this.modalServices.openDialog(this.contentBodyRed);
  }
}
