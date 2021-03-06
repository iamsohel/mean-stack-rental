import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddedPost(form: NgForm) {
    if ( form.invalid ) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
