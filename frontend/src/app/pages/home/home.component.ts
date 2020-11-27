import { ModalService } from './../../services/modals/modal.service';
import { Router } from '@angular/router';
import { AuthguardService } from './../../auth/guards/authguard.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [ { id: '', email: '', first_name: '', avatar: '' } ];
  page: number = 1;
  per_page: number;
  total: number;
  total_pages: number;
  paginations = [];
  count: number = 0;

  constructor(
    private api:ApiService,
    private authguard: AuthguardService,
    private router: Router,
    private modalService: ModalService,
    ) { }

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged = () =>{
    let auth = this.authguard.canActivate();
    if (auth == true){
      this.pages();
      this.listUsers(this.page);
    } else{
      this.router.navigate(['/login']);
    }
  }

  listUsers = (page) =>{
    if (page > this.total_pages){
      // NADA FAZ
    } else{
      this.api.getUsers(page).subscribe(
        data => {
          this.total_pages = data.total_pages;
          this.page = data.page;
          this.per_page = data.per_page;
          this.total = data.total;
          this.users = data.data;
          this.pages();
        },
      )
    }
  }

  logout = () => {
    this.authguard.logout();
  }

  pages = () => {
    if (this.count == 0){
      for (let i: number = this.page; i <= this.total_pages; i++) {
        this.paginations.push({'id': i});
          this.count ++;
      }
    }
  }

  openModal(id: number, title: string, button: string) {
    this.modalService.openModal(id, title, button);
  }

}
