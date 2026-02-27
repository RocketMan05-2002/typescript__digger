// main entry point of the application

import { TodoManager } from "./managers/TodoManager";

const manager = new TodoManager();
console.log("...adding todos");

const todo1 = manager.addTodo("Learn React");
const todo2 = manager.addTodo("Learn Typescript");
const todo3 = manager.addTodo("Learn Angular");

console.log("/n All Todos");
console.log(manager.getTodos());

console.log(manager.completeTodo(todo1.id) + "\n");

console.log(manager.getTodos());

console.log(manager.deleteTodo(todo3.id) + "\n");
console.log(manager.getTodos());


// running command - rocketman@Abhinays-MacBook-Air 01_todo_list % ts-node index.ts


/*  OUTPUT AT TERMINAL - 
rocketman@Abhinays-MacBook-Air 01_todo_list % ts-node index.ts
...adding todos
/n All Todos
[
  { id: 1772191510442, title: 'Learn React', completed: false },
  { id: 1772191510442, title: 'Learn Typescript', completed: false },
  { id: 1772191510442, title: 'Learn Angular', completed: false }
]
true

[
  { id: 1772191510442, title: 'Learn React', completed: true },
  { id: 1772191510442, title: 'Learn Typescript', completed: false },
  { id: 1772191510442, title: 'Learn Angular', completed: false }
]
true

[
  { id: 1772191510442, title: 'Learn Typescript', completed: false },
  { id: 1772191510442, title: 'Learn Angular', completed: false }
]
rocketman@Abhinays-MacBook-Air 01_todo_list % 
*/