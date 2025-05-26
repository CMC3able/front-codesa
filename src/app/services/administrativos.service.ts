import { Injectable } from '@angular/core';
import { Administrativo } from '../interfaces/personas.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrativosService {

  private apiUrl = 'http://localhost:1998/administrativo';
  administrativos: Administrativo[] = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  getAllAdministrativos(){
      return this.http
        .get<Administrativo[]>(
          this.apiUrl
        )
        .pipe(
          tap((res) => {
            this.administrativos = res;
          }),
          catchError((err) => {
            if (err) this.snackbar.open(err);
            return [];
          })
        );
    }
}
