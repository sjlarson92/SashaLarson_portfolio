import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos', // this is used in the root component to have it rendered
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { } // used to import servics

  //ngOnInit is essentially a life cycle method similar to componentDidMounth in react
  // this runs right away

  ngOnInit(): void {
  }

}
