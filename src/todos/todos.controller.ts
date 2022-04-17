import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    findAllTodos() : any[] {
        return this.todosService.findAll()
    }

    @Get(":id")
    getTodo(@Param('id') id: string) : Todo {
        return this.todosService.findOne(id)
    }

    @Post()
    addTodo(@Body() createTodoDto: CreateTodoDto) : Todo {
        return this.todosService.addTodo(createTodoDto)
    }

    @Patch(":id")
    updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) : Todo {
        return this.todosService.updateTodo(id, updateTodoDto);
    }
}
