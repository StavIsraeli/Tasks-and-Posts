import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-posts-comp',
  templateUrl: './posts-comp.component.html',
  styleUrls: ['./posts-comp.component.css']
})
export class PostsCompComponent implements OnInit {

  @Input()
  userid : String=""
  sub : Subscription = new Subscription()
  userPosts : Post[]=[]

  constructor(private srv : UserUtilsService, private router : Router) { }

  openAddPost()
  {

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/AddNewPost",this.userid]));
  }

  ngOnInit(): void {

    this.sub = this.srv.getAllPostsOfUser(this.userid)
    .subscribe(data =>
      {
        this.userPosts=data
      }
    )
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }


}
