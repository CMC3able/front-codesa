import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/personas.interface';
import { catchError, of, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiUrl = 'http://localhost:1998/persona';
  personas: Persona[] = [];

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  getAllPersonas() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((err) => {
        this.snackbar.open('Error al cargar personas', 'Cerrar', { duration: 3000 });
        console.error(err);
        return of([]);
      })
    );
  }
}
