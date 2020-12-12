import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  isAuth: boolean = false;
  user: any;

  constructor(private fireAuth: AngularFireAuth){}

  ngOnInit(): void {
    this.fireAuth.authState
      .subscribe(x => {
        x ? (this.isAuth = true) : this.isAuth = false;
      });
  }
}
