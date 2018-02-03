import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostService } from './post.service';
import { Posts } from './posts';
@Injectable()
export class PostResolveGuard implements Resolve<Posts[]> {

  constructor(private postService: PostService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Posts[]> {
      return this.postService.getPosts();
  }
}
