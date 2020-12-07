import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(i: any) {
    let { username, password } = i.value;
    let testRoute = 'about';
    this.fireAuth.signInWithEmailAndPassword(username, password).then(a => this.router.navigate([testRoute])).catch(err => throwError(err));
  }

}
