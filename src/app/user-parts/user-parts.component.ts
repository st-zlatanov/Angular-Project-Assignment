import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Article } from './../shared/article';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-parts',
  templateUrl: './user-parts.component.html',
  styleUrls: ['./user-parts.component.css']
})
export class UserPartsComponent implements OnInit {
  p: number = 1;   
  Article: Article[];                
  hideWhenNoArticle: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor( public crudApi: CrudService, public toastr: ToastrService) { }

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetArticlesList(); 
    s.snapshotChanges().subscribe(data => { 
      this.Article = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Article.push(a as Article);
      })
    })
  }

  dataState() {     
    this.crudApi.GetArticlesList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoArticle = false;
        this.noData = true;
      } else {
        this.hideWhenNoArticle = true;
        this.noData = false;
      }
    })
  }
  deleteArticle(article) {
    if (window.confirm('Are sure you want to delete this article ?')) {
      this.crudApi.DeleteArticle(article.$key)
      this.toastr.success(article.part + ' successfully deleted!'); 
    }
  }

  getCurrentUser(){
    return localStorage.getItem('email')
  }

  compareUser(article){
    if(article.seller===localStorage.getItem('email')){
      return true;
    }
  }

}
