import { Component, OnInit } from '@angular/core';

import { PostService } from '../service/posts/post.service';
import { Posts } from '../service/posts/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  // providers: [PostService]
})
export class PostsComponent implements OnInit {
  posts: Posts = new Posts();
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPosts() {
    console.log(this.posts);
    //call api to save the data
    this.postService.addPost(this.posts).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    )
    this.posts = new Posts();


  }

}
