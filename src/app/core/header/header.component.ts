import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = 'name';
  isAuth: boolean = false;
  user: any;


  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.fireAuth.authState
      .subscribe(x => {
        x ? (this.isAuth = true, this.user = x.toJSON()) : this.isAuth = false;
      });
  }

  logoutUser(event: any) {
    this.fireAuth.signOut();
    this.isAuth=false;
    this.router.navigate(['/home']);
    }

}