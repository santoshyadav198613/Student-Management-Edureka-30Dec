import { Component, OnInit } from '@angular/core';

import { PostService } from '../../service/posts/post.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
