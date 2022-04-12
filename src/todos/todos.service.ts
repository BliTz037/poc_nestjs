import { Injectable } from '@nestjs/common';
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
}
