import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article:Article = new Article();
  
  @Output() getArticles = new EventEmitter<string>();

  @Input() disableButtons:boolean = false;
  @Input() disable:boolean = true;


  setFirstContent: string = '';
  setSecondContent: string= '';
  deleteSubscription = new Subscription();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
   this.setFirstContent = this.article.content.split(".").filter(((word, i, words) => i <= words.length / 2)).join(".") + '.';
   this.setSecondContent = this.article.content.split(".").filter(((word, i, words) => i > words.length / 2)).join(".");
  }

  deleteArticle(id: number) {
    this.deleteSubscription = this.articleService.deleteArticle(id).subscribe((article) => {
      this.getArticles.emit('');
    })
  }

  editArticle(article:Article) {
    this.articleService.isModalOpen$.next(true);
    this.articleService.tempArticle$.next(article);
  }

  ngOnDestroy() {
    this.deleteSubscription.unsubscribe();
  }


}
