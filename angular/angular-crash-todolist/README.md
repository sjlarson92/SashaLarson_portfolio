# AngularCrashTodolist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--------------------------------------------------

# MY NOTES ON ANGULAR:

- Download Angular CLI using node.js and npm `sudo npm install -g @angular/cli`

- Create an angular project with command `ng new project-name`

- Run project on server with `ng serve --open` from terminal or go to package.json and click play from start script. This will automatcially run the service on localhost://4200

- Main component that renders is the index.html <app-root></app-root>. All other components render within this one

- In the app folder is the app.module.ts where all components must be added to the declarations, ng build will automatically do this when it runs

- Files that end in spec.ts are test files

- Files that end in .scss are the styling files (CSS)

- To create a new component run this command in terminal `ng generate component components/componentName ` or `ng g c components/componentName`. this will automatically generate the components folder and all the files for the todos component within the src/app folder

- To create a new service run this command: `ng g s service/serviceName`

- String interpolations is dynamic strings inside of html files:

```js
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // what will be used in the index.html element
  templateUrl: './app.component.html', // points to html
  styleUrls: ['./app.component.scss'] // points to styling
}) // this is a decorator and contains metadata for the component
export class AppComponent {
  name = 'SASHA';
}

//app.component.html
<div>
  <h1>
    {{ name }}
  </h1>
</div>
```

- Can also add js expression and methods within {{}}

```js
//app.component.html
<div>
  <h1>Hello my name is {{ name.toUpperCase() }}</h1>
  {{ 1 + 1 }}
</div>
```

- Angular can also utilize pipes '|' instead of some methods. 

```js
//app.component.html
<div>
  <h1>Hello my name is {{ name | uppercase }}</h1>
  {{ 1 + 1 }}
</div>
```

- Constructor

```js

// app.component.ts

constructor() {
    this.name='Bill' // this will change the var name to Bill since this runs before the app renders
  }
```

### For loop

- *ngFor
```js
<div>
  <h1>Todos:</h1>
  <ul *ngFor="let todo of todos">
    <li>
      {{ todo.title }}
    </li>
  </ul>
</div>
```

# Utilizing Typescript

```js
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'] 
}) 
export class AppComponent {
  name:string = 'SASHA'; // define this var as a string
}
```

- Custom methods in component
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // what will be used in the index.html element
  templateUrl: './app.component.html', // points to html
  styleUrls: ['./app.component.scss'] // points to styling
}) // this is a decorator and contains metadata for the component
export class AppComponent {
  name:string = 'Sasha'; // this is a var that can be used in the html example: {{title}}

  constructor() {
    this.changeName('Bob')
  }

  changeName(name:string):void {
    this.name = name;
  } // this is a custom method that takes in a string and returns void and this.name refers to the var under class
}
```
