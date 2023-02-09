import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { Task } from '../task';
import { Post } from '../post';
import { UserUtilsService } from '../user-utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private srv : UserUtilsService, private router : Router) { }

  users : User[] =[]
  filteresUsers : User[] = []
  sub : Subscription = new Subscription();
  selectedUser : String =""

  ngOnInit(): void {
    
    this.sub = this.srv.getUsers()
    .subscribe(data =>
    {
      this.users=data
      this.filteresUsers=data
    })
  }
  Search(searchItem : string )
  {
    
    this.filteresUsers = this.users.filter(x => x.Name.includes(searchItem)|| x.Email.includes(searchItem));

  }

  openAddUser()
  {
    this.router.navigate(["AddNewUser"]);
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
