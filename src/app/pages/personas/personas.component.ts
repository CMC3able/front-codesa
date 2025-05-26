import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../interfaces/personas.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatSnackBarModule, MatTableModule, MatButtonModule, MatIconModule, TablaComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent implements OnInit{

  listaPersonas: Persona[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'fechaNacimiento', 'email', 'telefono', 'acciones'];

  @ViewChild('contentBody') contentBodyRed!: TemplateRef<HTMLElement>;
  constructor(private personaService: PersonasService,
    private readonly modalServices: ModalService
  ) {}

  ngOnInit() {
    this.personaService.getAllPersonas().subscribe(data => {
      this.listaPersonas = data;
      console.log(this.listaPersonas)
    });
  }

  editarPersona() {
    console.log('Editar:');
  }

  eliminarPersona() {
    console.log('Eliminar:');
  }

  abriModal() {
    this.modalServices.openDialog(this.contentBodyRed);
  }

}
