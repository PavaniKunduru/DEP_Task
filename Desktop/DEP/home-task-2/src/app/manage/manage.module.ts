import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ManageRoutingModule } from './manage-routing.module';
import { UserComponent } from './user/user.component';
console.warn("manage module loaded")
@NgModule({
  declarations: [
    UserdetailsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  exports:[
    UserdetailsComponent
  ]
})
export class ManageModule { }
