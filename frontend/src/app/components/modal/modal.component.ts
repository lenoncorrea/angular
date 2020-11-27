import { AlertService } from './../../services/alert/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Crud } from './../../auth/classes/modals/crud';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  formCrud: FormGroup;

    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private api: ApiService,
      private alert: AlertService,
      ) { }

  ngOnInit(): void {
    this.createForm(new Crud());
  }

  createForm(crud: Crud){
    this.formCrud = new FormGroup({
      name: new FormControl(crud.name),
      job: new FormControl(crud.job),
    });
  };

  updateUser = (id, user) => {
    this.api.updateUser(id, user).subscribe(
      data => {
        if (data.status == 200){
          this.alert.openAlert('Sucesso','Usuário atualizado');
        }else{
          this.alert.openAlert('Erro','Algo inesperado aconteceu');
        }
      }
    )
  };

  deleteUser = (id) => {
    this.api.deleteUser(id).subscribe(
      data => {
        if (data.status == 204){
          this.alert.openAlert('Sucesso','Usuário removido');
        }else{
          this.alert.openAlert('Erro','Algo inesperado aconteceu');
        }
      }
    );
  };
}
