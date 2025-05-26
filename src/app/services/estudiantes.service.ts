import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { Estudiante } from '../interfaces/personas.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private apiUrl = 'http://localhost:1998/estudiantes';
  estudiantes: Estudiante[] = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  getAllEstudiantes(){
      return this.http
        .get<Estudiante[]>(
          this.apiUrl
        )
        .pipe(
          tap((res) => {
            this.estudiantes = res;
          }),
          catchError((err) => {
            if (err) this.snackbar.open(err);
            return [];
          })
        );
    }
}
