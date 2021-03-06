import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './Mycomponent/todolist/todolist.component';
import { TodoItemComponent } from './Mycomponent/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
