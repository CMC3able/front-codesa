import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
    {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'personas',
    loadComponent: () =>
      import('./pages/personas/personas.component').then(m => m.PersonasComponent)
  },
  {
    path: 'estudiantes',
    loadComponent: () =>
      import('./pages/estudiantes/estudiantes.component').then(m => m.EstudiantesComponent)
  },
  {
    path: 'profesores',
    loadComponent: () =>
      import('./pages/profesores/profesores.component').then(m => m.ProfesoresComponent)
  },
  {
    path: 'administrativos',
    loadComponent: () =>
      import('./pages/administrativos/administrativos.component').then(m => m.AdministrativosComponent)
  },
  {
    path: 'cursos',
    loadComponent: () =>
      import('./pages/cursos/cursos.component').then(m => m.CursosComponent)
  },
  {
    path: 'inscripciones',
    loadComponent: () =>
      import('./pages/inscripciones/inscripciones.component').then(m => m.InscripcionesComponent)
  }
];
