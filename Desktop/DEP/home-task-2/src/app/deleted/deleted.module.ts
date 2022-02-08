import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';



@NgModule({
  declarations: [
    DeletedUsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DeletedUsersComponent
  ]
})
export class DeletedModule { }
