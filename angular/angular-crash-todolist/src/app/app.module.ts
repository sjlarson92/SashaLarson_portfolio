import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http"; // this will allow us to make api calls similar to axios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
    // your components must be listed here and are added automatically when you create them with the CLI
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // add import here to be utilized
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
