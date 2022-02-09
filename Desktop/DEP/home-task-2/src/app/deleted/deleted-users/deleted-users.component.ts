import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UsersserviceService } from 'src/app/usersservice.service';

@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.css']
})
export class DeletedUsersComponent implements OnInit {

  constructor(private service:UsersserviceService) { this.m();}
  users:User[] =[];
  ngOnInit(): void {
  }
  m(): void{
    this.users= this.service.users;
    console.log(this.users)
   }
   activate(id:string){
    this.service.activating(id);
   }
}
