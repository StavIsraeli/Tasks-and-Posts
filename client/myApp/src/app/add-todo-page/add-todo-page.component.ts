import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Task } from '../task';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-add-todo-page',
  templateUrl: './add-todo-page.component.html',
  styleUrls: ['./add-todo-page.component.css']
})
export class AddTodoPageComponent implements OnInit {

  sub : Subscription = new Subscription()
  userid : String = "";
  newTask : Task = new Task ("","",false)

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
      
      this.sub=this.srv.addNewTaskForUser(this.userid, this.newTask)
      .subscribe(status  =>{alert(status)})
       this.router.navigate(["/UserDetails",this.userid])
       .then(() => {
        window.location.reload();
      });
    }
    

  }

  backToTodos()
  {
    this.router.navigate(["/UserDetails",this.userid]);
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
