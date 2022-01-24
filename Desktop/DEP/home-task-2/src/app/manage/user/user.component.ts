import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user';
import { UsersserviceService } from 'src/app/usersservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  idnum:string="";
  users:User[] =[];
  constructor(private service:UsersserviceService,private router:ActivatedRoute) {
  this.router.params.subscribe(data=>{
  this.idnum=data['id'];
  this.m();
    });
  }
  
  user: User={
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    login: '',
    password: '',
    isDeleted: false
  };
  details:boolean=false;
  idNumber:string='';
  ngOnInit(): void {
  }
  m(): void{
    this.users= this.service.users;
    console.log(this.users);
    this.users.forEach((i)=>{ 
      if (this.idnum==i.id)
         return this.user=i;


   })
  }
}
