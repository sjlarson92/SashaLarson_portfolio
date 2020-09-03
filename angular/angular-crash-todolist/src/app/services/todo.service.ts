import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"; // to use these they need to be injected into the constructor
import { Observable} from "rxjs";

import { Todo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos' // base url for the api call
  todosLimit:string = '?_limit=5'

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> { // the method getTodos returns an observable of Todo[]
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); // this is a get http call to the todosUrl that returns a Todo[]
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url:string = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions) // need to send in content-type in headers when passing data
  }
}
