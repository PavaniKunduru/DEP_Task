import { Injectable } from '@angular/core';
import { User } from './user';
 
@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {
  users:User[];
  user1:User={
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    login: '',
    password: '',
    isDeleted: false
  };
  constructor() {
    this.users=[
      {id:'1',firstName:"Pavani",lastName:'Kunduru',age:22,login:"inactive", password:'pavani', isDeleted:false},
      {id:'2',firstName:"Geetha",lastName:'Pandeswara',age:23,login:"inactive", password:'geetha', isDeleted:true},
      {id:'3',firstName:"Naga",lastName:'Pani',age:13,login:"inactive", password:'paninaga', isDeleted:false},
      {id:'4',firstName:"jaya",lastName:'lakshmi',age:21,login:"inactive", password:'jaya', isDeleted:true},
      {id:'5',firstName:"Surendra",lastName:'Kunduru',age:25,login:"inactive", password:'surendra', isDeleted:false},
      {id:'6',firstName:"Kaveri",lastName:'Pandeswara',age:22,login:"inactive", password:'kaveri', isDeleted:true},
      {id:'7',firstName:"Prasanth",lastName:'Reddy',age:20,login:"inactive", password:'prasanth', isDeleted:false},
      {id:'8',firstName:"pavan",lastName:'kumar',age:24,login:"inactive", password:'pavankumar', isDeleted:false},
    ];
  }
    update(id:string){
       this.users.forEach(i=>{
         if(id==i.id)
             return i.isDeleted=true;
       })
      }
      activating(id:string){
        this.users.forEach(i=>{
          if(id==i.id)
              return i.isDeleted=false;
        })
       }

      
  }

