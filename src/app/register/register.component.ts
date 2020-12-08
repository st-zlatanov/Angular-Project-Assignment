import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
    this.fireAuth.authState.subscribe(user => console.log(user?.toJSON(), 'console was called'));

  }

  submitForm(i: any) {
    let { username, password, repassword } = i.value;

    if (password === repassword) {
      this.fireAuth.createUserWithEmailAndPassword(username, password).then(a => this.router.navigate(['home'])).catch(err => throwError(err));
    }
  }

}