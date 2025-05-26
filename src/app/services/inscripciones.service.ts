import { Injectable } from '@angular/core';
import { Inscripciones } from '../interfaces/personas.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  private apiUrl = 'http://localhost:1998/inscripcion';
  inscripciones: Inscripciones[] = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  getAllInscripciones(){
      return this.http
        .get<Inscripciones[]>(
          this.apiUrl
        )
        .pipe(
          tap((res) => {
            this.inscripciones = res;
          }),
          catchError((err) => {
            if (err) this.snackbar.open(err);
            return [];
          })
        );
    }
}
