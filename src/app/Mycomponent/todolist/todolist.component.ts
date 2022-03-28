import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { 

    this.todos = [{sno: 1, title:"Title 1", description:"Description 1"},
    {sno: 2, title:"Title 2", description:"Description 2"},
    {sno: 3, title:"Title 3", description:"Description 3"}];
  }

  ngOnInit(): void {
  }

  DeleteTodo(todo: Todo){

    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
