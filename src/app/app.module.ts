import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC_uLCOgAWt888XwvdbEMvH5x2cWbi_R9E",
      authDomain: "angular-project-assignment.firebaseapp.com",
      projectId: "angular-project-assignment",
      storageBucket: "angular-project-assignment.appspot.com",
      messagingSenderId: "473012840057",
      appId: "1:473012840057:web:1a888e45488b97244d56a8"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
