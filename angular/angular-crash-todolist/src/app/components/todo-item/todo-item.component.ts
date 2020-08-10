import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "src/app/models/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      todo: true,
      isComplete: this.todo.completed
    };
  }

  onToggle(todo) {
    console.log("Toggle")
  }
  onDelete(todo) {
    console.log("Delete")
  }

}
