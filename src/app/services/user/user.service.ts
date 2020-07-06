import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId): Observable<User>{
    return;
    this.httpClient
      .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
  getPostOfUser(userId): Observable<Post[]>{
   return this.httpClient
     .get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
  getCommentOfPost(postId): Observable<Comment[]>{
    return this.httpClient
      .get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
