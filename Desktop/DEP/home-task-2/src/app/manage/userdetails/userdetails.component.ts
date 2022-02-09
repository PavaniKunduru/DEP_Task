import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UsersserviceService } from 'src/app/usersservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private service:UsersserviceService, private route:Router) {
   this. m();
   }

  ngOnInit(): void {
  }
   users:User[] =[];
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
   m(): void{
    this.users= this.service.users;
    console.log(this.users)
   }

   userDetails(id:string){
  //    this.details=true;
  //    this.idNumber=id;
  //    this.users.forEach((i)=>{ 
  //      if(i.id==id)
  //       this.user=i;
  //       console.log(this.user)
  //     return this.user;
  //    })
    
   }
    
}
