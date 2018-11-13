import { PostService } from './../post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
  console.log(this.postService.getPost());
  }

   ngOnDestroy() {
   }

}
