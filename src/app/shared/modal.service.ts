import { inject, Injectable, model, signal, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  constructor(public dialog: MatDialog) {}

  openDialog(data: TemplateRef<HTMLElement>): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data,
      width: '70vw'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
