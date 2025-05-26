import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/personas.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl = 'http://localhost:1998/curso';
  cursos: Curso[] = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  getAllCursos(){
      return this.http
        .get<Curso[]>(
          this.apiUrl
        )
        .pipe(
          tap((res) => {
            this.cursos = res;
          }),
          catchError((err) => {
            if (err) this.snackbar.open(err);
            return [];
          })
        );
    }

}
