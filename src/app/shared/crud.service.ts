import { Injectable } from '@angular/core';
import { Article } from '../shared/article';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  articlesRef: AngularFireList<any>;    
  articleRef: AngularFireObject<any>;   
  
  constructor(private db: AngularFireDatabase) { }

  
  AddArticle(article: Article) {
    this.articlesRef.push({
      part: article.part,
      seller: article.seller,
      description: article.description
    })
  }

  GetArticle(id: string) {
    this.articleRef = this.db.object('articles-list/' + id);
    return this.articleRef;
  }

  GetArticlesList() {
    this.articlesRef = this.db.list('articles-list');
    return this.articlesRef;
  }  

  UpdateArticle(article: Article) {
    this.articleRef.update({
      part: article.part,
      seller: article.seller,
      description: article.description
    })
  }  

  DeleteStudent(id: string) { 
    this.articleRef = this.db.object('articles-list/'+id);
    this.articleRef.remove();
  }
  
}