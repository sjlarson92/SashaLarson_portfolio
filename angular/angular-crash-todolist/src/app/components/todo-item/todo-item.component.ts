import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Todo } from "src/app/models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      todo: true,
      isComplete: this.todo.completed
    };
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed
    // Toggle in Server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })
  }
  onDelete(todo) {
    console.log("Delete")
  }

}
