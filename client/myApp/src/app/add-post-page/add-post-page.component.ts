import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserUtilsService } from '../user-utils.service';
import { Post } from '../post';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit {

  sub : Subscription = new Subscription()
  userid : String = "";
  newPost : Post = new Post("","","")

  constructor(private ar : ActivatedRoute, private srv : UserUtilsService, private router : Router) { }

  ngOnInit(): void {

    this.sub = this.ar.params.subscribe(data =>
      {
        this.userid =  data["id"];
      })
  }

  customSubmit(isValid : boolean | null)
  {
    
    if(isValid)
    {
      
      this.sub=this.srv.addNewPostForUser(this.userid, this.newPost)
      .subscribe(status  =>{alert(status)})
       this.router.navigate(["/UserDetails",this.userid])
    }
    

  }

  backToPosts()
  {
    this.router.navigate(["/UserDetails",this.userid]);
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
