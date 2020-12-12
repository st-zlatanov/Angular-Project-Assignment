import { Component, OnInit } from "@angular/core";
import { CrudService } from "../shared/crud.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Location } from '@angular/common';


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
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.crudApi.GetArticlesList();
    this.articlForm();
  }

  articlForm() {
    this.articleForm = this.fb.group({
      part: ["", [Validators.required, Validators.minLength(2)]],
      seller: new FormControl(localStorage.getItem('email')),
      description: ["",[Validators.required]],
    });
  }

  get part() {
    return this.articleForm.get("part");
  }

  get seller() {
    return this.articleForm.get("seller");
  }

  get description() {
    return this.articleForm.get("description");
  }

  ResetForm() {
    this.articleForm.reset();
  }
  goBack() {
    this.location.back();
  }

  submitArticleData() {
    this.crudApi.AddArticle(this.articleForm.value);
    this.toastr.success(
      this.articleForm.controls["part"].value + " successfully added!"
    );
    this.ResetForm();
    this.router.navigate(['/view-articles']);
  }

  getCurrentUser(){
    return localStorage.getItem('email')
  }
}
