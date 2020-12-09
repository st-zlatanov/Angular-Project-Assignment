import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
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

  get title() {
    return this.editForm.get('title');
  }

  get author() {
    return this.editForm.get('author');
  }

  get description() {
    return this.editForm.get('description');
  }

  updateArticleData() {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: [''],
      description: ['', [Validators.required]],
    })
  }

  goBack() {
    this.location.back();
  }

  updateForm(){
    this.crudApi.UpdateArticle(this.editForm.value);
    this.toastr.success(this.editForm.controls['title'].value + ' updated successfully');
    this.router.navigate(['view-articles']);
  }

}
