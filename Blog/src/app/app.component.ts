import {Component, OnInit} from '@angular/core';


export interface Post { // object of posts
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  posts: Post[] = [ // array of posts

  ];

  updatePosts(post: Post){
    this.posts.unshift(post);
  }

  removePost(id: number){
    console.log('Id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
