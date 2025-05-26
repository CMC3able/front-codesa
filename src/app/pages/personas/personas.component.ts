import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../interfaces/personas.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-personas',
  standalone: false,
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent implements OnInit{

  listaPersonas: Persona[] = [];
  columnas: string[] = ['nombre', 'acciones'];

  constructor(private personaService: PersonasService) {}

  ngOnInit() {
    this.personaService.getAllPersonas().subscribe(data => {
      this.listaPersonas = data;
    });
  }

  editarPersona(p: Persona) {
    console.log('Editar:', p);
  }

  eliminarPersona(p: Persona) {
    console.log('Eliminar:', p);
  }

}
