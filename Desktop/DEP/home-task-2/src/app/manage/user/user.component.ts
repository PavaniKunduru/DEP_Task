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
  num:string="";
  users:User[] =[];
  constructor(private service:UsersserviceService,private router:ActivatedRoute) {
  this.router.params.subscribe(data=>{
  this.num=data['id'];
  this.getUser();
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
  getUser(): void{
    this.users= this.service.users;
    console.log(this.users);
    this.users.filter((i)=>{ 
      if (this.num==i.id)
         return this.user=i;
   })
  }
}
