import { Injectable } from "@angular/core";
import {AngularFireAuth} from '@angular/fire/auth'
@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  isLoggedIn = false;
  constructor(public fireBaseAuth : AngularFireAuth) {}
    async signin(email: string, password: string){
      await this.fireBaseAuth.signInWithEmailAndPassword(email, password)
      .then(res=>{
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
    }

    async signup(email: string, password: string){
      await this.fireBaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res=>{
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
    }

    logout(){
      this.fireBaseAuth.signOut()
      localStorage.removeItem('user')
    }
  
}
