import { ModalComponent } from './../../components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: MatDialog) { }

  openModal(id, title, button) {
    this.modalService.open(ModalComponent, {
      data: {
        id: id,
        title: title,
        button: button,
        disable: true,
      }
    });
  }

}
