import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../user';
import { UserUtilsService } from '../user-utils.service';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.css']
})
export class AddUserPageComponent implements OnInit {

  constructor(private srv : UserUtilsService, private router : Router) { }
  newUser : User = new User("","","","", "","",[],[])
  
  sub : Subscription = new Subscription()

  ngOnInit(): void {
  }


  customSubmit(isValid : boolean | null)
  {
    
    if(isValid)
    {
      
      this.sub=this.srv.addUser( this.newUser)
      .subscribe(status  =>{alert(status)})

      
      
      
      this.router.navigate(['/']) .then(() => {
        window.location.reload();
      });
        
       
      
      
    }
    
    
  }

    backToMainPage()
      {
      
        
        this.router.navigate(["/"]);
        
       
      }
}
