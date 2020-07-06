import { Component } from '@angular/core';
import {Post} from './models/Post';
import {Comment} from './models/Comment';
import {PostService} from './services/post/post.service';
import {CommentService} from './services/comment/comment.service';
import {User} from './models/User';
import {UserService} from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  comments: Comment[];
  users: User[];

  constructor(private userService: UserService) {
    this.userService
      .getUsers()
      .subscribe(user => this.users = user);
  }
}
