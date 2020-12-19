import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  editForm: FormGroup;

  constructor(private crudApi: CrudService,      
    private fb: FormBuilder,            
    private location: Location,         
    private actRoute: ActivatedRoute,   
    private router: Router,            
    private toastr: ToastrService    ) {
    
   }

  ngOnInit(): void {
    this.updateArticleData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi.GetArticle(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)})
  }

  get part() {
    return this.editForm.get('part');
  }

  get seller() {
    return this.editForm.get('seller');
  }

  get description() {
    return this.editForm.get('description');
  }
  get price(){
    return this.editForm.get('price');
  }

  updateArticleData() {
    this.editForm = this.fb.group({
      part: ['', [Validators.required, Validators.minLength(2)]],
      seller: [''],
      description: ['', [Validators.required]],
      price: ["", [Validators.required, Validators.min(0)]]
    })
  }

  goBack() {
    this.location.back();
  }

  updateForm(){
    this.crudApi.UpdateArticle(this.editForm.value);
    this.toastr.success(this.editForm.controls['part'].value + ' updated successfully');
    this.router.navigate(['article/view-articles']);
  }

  getCurrentUser(){
    return localStorage.getItem('email')
  }


}
