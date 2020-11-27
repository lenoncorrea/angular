import { AuthguardService } from './../../guards/authguard.service';
import { Register } from './../../classes/forms/register/register';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private api: ApiService,
    private authguard: AuthguardService,
    ) { }

  ngOnInit(): void {
    this.createForm(new Register());
  }

  registerUser = (formRegister) =>{
    this.api.registerUser(formRegister.value).subscribe(
      data => {
        this.authguard.login(data.token);
      }
    );
  };

  createForm(register: Register){
    this.formRegister = new FormGroup({
      email: new FormControl(register.email,[
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ]),
      password: new FormControl(register.password,[
        Validators.required,
      ]),
    });
  };
  get email(){
    return this.formRegister.get('email');
  };
  get password(){
    return this.formRegister.get('password');
  };
}
