import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { throwError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.fireAuth.authState.subscribe(user => console.log(user?.toJSON(), 'console was called'));

  }

  submitForm(i: any) {
    let { username, password, repassword } = i.value;

    if (password === repassword) {
      this.fireAuth.createUserWithEmailAndPassword(username, password).then(a => console.log(a)).catch(err => throwError(err));
    }
    console.log(i);
    console.log('the form was submitted!', username, password, repassword);
  }

}