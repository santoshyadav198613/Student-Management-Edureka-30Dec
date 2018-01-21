import { Component, OnInit } from '@angular/core';

import { PostService } from '../../service/posts/post.service';
import { Posts } from '../../service/posts/posts';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Posts[];
  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(
      (res) => this.postsList = res,
      (err) => console.log(err)
    );
  }

}
