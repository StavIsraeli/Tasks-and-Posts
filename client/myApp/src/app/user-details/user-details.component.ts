import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  sub : Subscription = new Subscription()
  userid : String = "";

  constructor(private ar : ActivatedRoute) { }

  ngOnInit(): void {

    this.sub = this.ar.params.subscribe(data =>
      {
        this.userid =  data["id"];
      })
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }


}
