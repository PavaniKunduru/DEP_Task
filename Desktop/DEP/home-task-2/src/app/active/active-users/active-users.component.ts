
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersserviceService } from 'src/app/usersservice.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users:User[] =[];
  constructor(private service:UsersserviceService) { 
    this.m();
  }

  ngOnInit(): void {
  }
  m(): void{
    this.users= this.service.users;
    console.log(this.users)
   }
   deactivate(id:string){
    this.service.update(id);
   }
}
