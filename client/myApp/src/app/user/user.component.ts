import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router  :Router,private ar : ActivatedRoute, private srv : UserUtilsService) { }

  isCompleteTasks : boolean = true
  isOtherData : boolean = false
  
  sub :Subscription = new Subscription()
  sub2 :Subscription = new Subscription()

  @Input()
  user : User = new User("","","","","","",[],[] ) 

  @Output()
  notify : EventEmitter<String> = new EventEmitter<String>()

  changeStyle : boolean = false

  @Input()
  isSelected : boolean = false;
  
    
  openDetails()
  {
    this.changeStyle=true
    
    this.notify.emit(this.user._id);
    
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/UserDetails",this.user._id]));
  }
  

  customSubmit(isValid : boolean | null)
  {
    
    if(isValid)
    {
      
      this.sub=this.srv.updateUser(this.user._id, this.user)
      .subscribe(status  =>{alert(status)})
    }
    
  }

  

  deleteUser()
  {
    this.sub2= this.srv.deleteUser(this.user._id)
    .subscribe(status  =>{alert(status)})

    window.location.reload();
  }

  ngOnInit(): void {

    let uncompleted=this.user?.Tasks.find(x => x.Completed==false);
    if(uncompleted!=null)
    {
      this.isCompleteTasks=false;
    }

    
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}
