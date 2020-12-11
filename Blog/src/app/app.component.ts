import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'I want to learn Angular components', text: 'I\'m still learning components..', id: 1},
    {title: 'The next block', text: 'Will be, about directives and pipes', id: 2}
  ];
}
