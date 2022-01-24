import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './active-users/active-users.component';



@NgModule({
  declarations: [
    ActiveUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ActiveUsersComponent
  ]
})
export class ActiveModule { }
