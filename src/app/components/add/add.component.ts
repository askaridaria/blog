import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy{

  constructor(private articleService: ArticleService) { }

  articles: Article[] = [];
  articlesLength: number = 0;
  isModalOpen$ = this.articleService.isModalOpen$;

  ngOnInit(): void {
   }

  openModal() {
    this.isModalOpen$.next(true);
    this.articleService.tempArticle$.next(new Article());
  }
  ngOnDestroy(): void {

  }

}
