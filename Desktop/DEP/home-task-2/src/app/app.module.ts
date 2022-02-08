import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
