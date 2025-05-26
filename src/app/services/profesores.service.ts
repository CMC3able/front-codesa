import { Injectable } from '@angular/core';
import { Profesor } from '../interfaces/personas.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  private apiUrl = 'http://localhost:1998/profesores';
  profesores: Profesor[] = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  getAllProfesores(){
      return this.http
        .get<Profesor[]>(
          this.apiUrl
        )
        .pipe(
          tap((res) => {
            this.profesores = res;
          }),
          catchError((err) => {
            if (err) this.snackbar.open(err);
            return [];
          })
        );
    }
}
