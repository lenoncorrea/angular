import { AuthguardService } from './../../guards/authguard.service';
import { Login } from './../../classes/forms/login/login';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private api: ApiService,
    private authguard: AuthguardService,
    ) { }

  ngOnInit(): void {
    this.createForm(new Login());
  }

  loginUser = (formLogin) =>{
    this.api.loginUser(formLogin.value).subscribe(
      data => {
        this.authguard.login(data.token)
      }
    );
  };

  createForm(login: Login){
    this.formLogin = new FormGroup({
      email: new FormControl(login.email,[
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ]),
      password: new FormControl(login.password,[
        Validators.required,
      ]),
    });
  };
  get email(){
    return this.formLogin.get('email');
  };
  get password(){
    return this.formLogin.get('password');
  };
}
