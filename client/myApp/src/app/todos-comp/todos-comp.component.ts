import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-todos-comp',
  templateUrl: './todos-comp.component.html',
  styleUrls: ['./todos-comp.component.css']
})
export class TodosCompComponent implements OnInit {

  @Input()
  userid : String=""
  sub : Subscription = new Subscription()
  userTasks : Task[]=[]

  constructor(private srv : UserUtilsService, private router : Router) { }

  openAddTask()
  {

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/AddNewTask",this.userid]));
  }
  

  ngOnInit(): void {

    this.sub = this.srv.getAllTasksOfUser(this.userid)
    .subscribe(data =>
      {
        this.userTasks=data
      }
    )
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
