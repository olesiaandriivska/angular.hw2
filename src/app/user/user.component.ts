import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  allPostsToLog(userId: number): void{
    this.userService.getPostOfUser(userId)
      .subscribe(post => console.log(post));
  }
  allCommentsToLog(postId: number): void{
    this.userService.getCommentOfPost(postId)
      .subscribe(comment => console.log(comment));
  }
}
