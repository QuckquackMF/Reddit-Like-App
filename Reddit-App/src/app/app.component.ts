import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles:Article[];   // <-- component property
  constructor(){
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article('Angular 2', 'http://angular.io', 3));
    return false;
  }
}
