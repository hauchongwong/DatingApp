import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {}
 // loggedIn = false
//currentUsers$ : Observable<User | null> = of(null);


  constructor(public accountService:AccountService) {}

  ngOnInit(): void {    
    //this.getCurrentUser();
    //this.currentUsers$ = this.accountService.currentUsers$;
  }

  // getCurrentUser() {
  //   this.accountService.currentUsers$.subscribe({
  //     next:user => this.loggedIn = !!user,
  //     error:error=>console.log(error)
  //   })
  // }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
       // console.log(response);
       // this.loggedIn = true;
      },
      error: error=>console.log(error)
    })


  }

  logout() {
    this.accountService.logout();
   // this.loggedIn = false;
  }
}
