import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Administrativo } from '../../interfaces/personas.interface';
import { AdministrativosService } from '../../services/administrativos.service';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from '../../shared/tabla/tabla.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalService } from '../../shared/modal.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-administrativos',
  standalone: true,
  imports: [CommonModule, MatTableModule, TablaComponent, MatIconModule, MatButtonModule],
  templateUrl: './administrativos.component.html',
  styleUrl: './administrativos.component.css'
})
export class AdministrativosComponent implements OnInit {
  listaAdministrativo: Administrativo[] = [];
  listaPersonas: any[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'fechaNacimiento', 'email', 'telefono', 'cargo', 'departamento'];
  
  @ViewChild('contentBody') contentBodyRed!: TemplateRef<HTMLElement>;
  constructor(private administrativosServices: AdministrativosService,
    private readonly modalServices: ModalService
  ) {}
    
  ngOnInit() {
    this.administrativosServices.getAllAdministrativos().subscribe(data => {
      this.listaAdministrativo = data;
      this.listaPersonas = data.map(item => ({...item, ...item.persona, persona: undefined}));
      console.log(this.listaAdministrativo);
    });
  }
    
  editarPersona(a: Administrativo) {
    console.log('Editar:', a);
  }
    
  eliminarPersona(a: Administrativo) {
    console.log('Eliminar:', a);
  }

  abriModal() {
    this.modalServices.openDialog(this.contentBodyRed);
  }
}
