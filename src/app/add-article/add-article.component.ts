import { Component, OnInit } from "@angular/core";
import { CrudService } from "../shared/crud.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.css"],
})
export class AddArticleComponent implements OnInit {
  public articleForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private fireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.crudApi.GetArticlesList();
    this.articlForm();
  }

  articlForm() {
    this.articleForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      author: new FormControl(localStorage.getItem('email')),
      description: ["",[Validators.required]],
    });
  }

  get title() {
    return this.articleForm.get("title");
  }

  get author() {
    return this.articleForm.get("author");
  }

  get description() {
    return this.articleForm.get("description");
  }

  ResetForm() {
    this.articleForm.reset();
  }

  submitArticleData() {
    this.crudApi.AddArticle(this.articleForm.value);
    this.toastr.success(
      this.articleForm.controls["title"].value + " successfully added!"
    );
    this.ResetForm();
  }

  getCurrentUser(){
    return localStorage.getItem('email')
  }
}
