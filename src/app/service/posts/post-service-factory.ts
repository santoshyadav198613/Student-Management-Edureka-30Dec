import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { PostService } from './post.service';

export function postFactory(http: HttpClient, loginService: LoginService) {
    return new PostService(http, loginService.isLoggedIn);
}
