import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todos.interface';

@Injectable()
export class TodosService {
    todoListStatic: Todo[] = [
        {
            id: 1,
            name: "Regarder Mr.Robot",
            description: "Saison 2",
            isDone: false
        },
        {
            id: 2,
            name: "Boire de l'eau",
            description: "Dans 20 ans il y'en aura plus :'(",
            isDone: true
        }
    ]

    findAll(): Todo[] {
        return this.todoListStatic;
    }

    findOne(id: string): Todo {
        const result: Todo = this.todoListStatic.find(todo => todo.id === Number(id))
        if (!result)
            throw new NotFoundException("Bad id or Todo not found !");
        return result;
    }

    addTodo(todo: CreateTodoDto): Todo {
        this.todoListStatic = [...this.todoListStatic, todo];
        return this.todoListStatic[this.todoListStatic.length - 1];
    }

    updateTodo(id: string, updateTodo: UpdateTodoDto): Todo {
        let result: Todo = this.todoListStatic.find(todo => todo.id === Number(id))
        if (!result)
            throw new NotFoundException("Bad id or Todo not found !");
        
        if (!updateTodo.hasOwnProperty('isDone') || !updateTodo.hasOwnProperty('name'))
            throw new BadRequestException("You must give the parmas : isDone & name !");
        result['name'] = updateTodo['name'];
        result['isDone'] = updateTodo['isDone'];
        result['description'] = updateTodo['description'] || result['description'];
        const updatedTodos = this.todoListStatic.map(t => t.id !== +id ? t : result);
        this.todoListStatic = [...updatedTodos];
        return result;
    }
}
