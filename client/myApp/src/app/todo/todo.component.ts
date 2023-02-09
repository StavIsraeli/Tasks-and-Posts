import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  task : Task = new Task("","",false)

  @Input()
  userid : String=""
  sub : Subscription = new Subscription()

  constructor(private srv : UserUtilsService, private router : Router) { }

  CompleteTask()
  {
    let completeTask= new Task(this.task._id,this.task.Title, true)

    this.sub=this.srv.updateUserTask(this.userid, completeTask)
    .subscribe()

    window.location.reload();
  }

  ngOnInit(): void {
  }

}
