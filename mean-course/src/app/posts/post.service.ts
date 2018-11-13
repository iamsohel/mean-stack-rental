import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get('http://localhost:3000/api/posts')
    .subscribe( (res) => {
        this.posts = res as Post[];
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
      const post: Post = {
        title : title, content: content
      };
      this.posts.push(post);
      this.postsUpdated.next(this.posts);
  }
}
