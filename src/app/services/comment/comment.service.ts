import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../../models/Comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // constructor(private httpClient: HttpClient) {
  // }
  // getComments(): Observable<Comment[]>{
  //   return this.httpClient
  //       .get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  //
  // }
}
