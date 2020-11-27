import { AlertComponent } from './../../components/alert/alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService: MatDialog) { }

  openAlert(title, message) {
    this.modalService.open(AlertComponent, {
      data: {
        title: title,
        message: message,
      }
    });
  }
}
