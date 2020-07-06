import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';
import get = Reflect.get;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }
  getPosts(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
