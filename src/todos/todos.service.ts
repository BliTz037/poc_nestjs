import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import Todos from './todos.entity';

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(Todos)
        private todosRepository: Repository<Todos>
    ) {}

    async findAll() {
        return await this.todosRepository.find();
    }

    async findOne(id: string)  {
        const todo = await this.todosRepository.findOne(id);
        if (todo)
            return todo;
        throw new NotFoundException("Todo not found !");
    }

    async addTodo(todo: CreateTodoDto) {
        const newTodo = await this.todosRepository.create(todo);
        await this.todosRepository.save(newTodo);
        return newTodo;
    }

    async updateTodo(id: string, updateTodo: UpdateTodoDto): Promise<any> {

        const updatedTodo = await this.todosRepository.findOne(id);
        if (updateTodo)
            return updateTodo
        throw new NotFoundException("Todo not found !");
    }

    async deleteTodo(id: string) : Promise<any> {
        const deleteStatus = await this.todosRepository.delete(id)

        if (deleteStatus.affected)
            return { "response": `Todo ${id} deleted !` };
        else
            throw new NotFoundException("Todo not found !");
    }
}
