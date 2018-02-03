import { Component, OnInit } from '@angular/core';

import { PostService } from '../../service/posts/post.service';
import { Posts } from '../../service/posts/posts';
import { HttpEventType } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Posts[];
  dataSize: number = 0;
  constructor(private postsService: PostService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    // this.postsService.getPosts().subscribe(
    //   (res) => this.postsList = res,
    //   (err) => console.log(err)
    // );


    this.router.data.subscribe(
      (data) => this.postsList = data['postList']
    )

    this.postsService.getPhotos().subscribe(
      (event) => {
        switch (event.type) {
          case HttpEventType.DownloadProgress: {
            console.log(event.loaded);
            this.dataSize = this.dataSize + event.loaded;
            break
          }
          case HttpEventType.Response: {
            console.log(event.body);
            break;
          }
        }
      },
      (err) => console.log(err)
    )

  }

}
