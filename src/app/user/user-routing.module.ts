import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserPartsComponent } from "./user-parts/user-parts.component";
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToItems = () => redirectLoggedInTo(["view-articles"]);

const routes: Routes = [
      {
        path: "register",
        component: RegisterComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToItems },
      },
      {
        path: "login",
        component: LoginComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToItems },
      },
      {
        path: "user-parts",
        component: UserPartsComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule{}
