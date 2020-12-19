import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  {
    path: "article",
    loadChildren: () =>
      import("./article/article-routing.module").then(
        (m) => m.ArticleRoutingModule
      ),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./user/user-routing.module").then(
        (m) => m.UserRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
