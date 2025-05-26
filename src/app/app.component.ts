import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoginPage: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Escuchar eventos de navegación para detectar cuando cambian las rutas
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Actualizar el estado de la página según la URL
        this.isLoginPage = event.url === '/login';  // O '/home' si ese es el login
      }
    });
  }
  
  goToHome() {
    this.router.navigate(['/home']);
  }

  goToPersonas() {
    this.router.navigate(['/personas']);
  }

  goToEstudiantes() {
    this.router.navigate(['/estudiantes']);
  }

  goToAdministrativos() {
    this.router.navigate(['/administrativos']);
  }

  goToProfesores() {
    this.router.navigate(['/profesores']);
  }

  goToCursos() {
    this.router.navigate(['/cursos']);
  }

  goToInscripciones() {
    this.router.navigate(['/inscripciones']);
  }
}
