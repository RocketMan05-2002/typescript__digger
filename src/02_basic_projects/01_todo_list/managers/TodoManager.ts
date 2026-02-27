/* 
Handles:
	•	addTodo
	•	deleteTodo
	•	completeTodo
	•	getTodos
*/

import { Todo } from "../models/todo"

export class TodoManager {
    private todos: Todo[] = [];

    addTodo(title:string):Todo{
        const newTodo: Todo = {
            id: Date.now(),
            title: title,
            completed: false,
        };

        this.todos.push(newTodo);
        return newTodo;
    }

    getTodos(): Todo[]{
        return this.todos;
    }

    completeTodo(id: number) :boolean {
        const todo = this.todos.find(todo => todo.id === id);

        if(!todo) return false;
        todo.completed = true;
        return true;
    }

    deleteTodo(id:number):boolean{
        const index = this.todos.findIndex(todo => todo.id === id);
        if(index === -1 ) return false;
        this.todos.splice(index,1);
        return true;
    }


}