import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    findAllTodos() {
        return this.todosService.findAll()
    }

    @Get(":id")
    getTodo(@Param('id') id: string) : any {
        return this.todosService.findOne(id)
    }

    @Post()
    @UseGuards(JwtAuthenticationGuard)
    addTodo(@Body() createTodoDto: CreateTodoDto) : any {
        return this.todosService.addTodo(createTodoDto)
    }

    @Patch(":id")
    updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) : any {
        return this.todosService.updateTodo(id, updateTodoDto);
    }

    @Delete(":id")
    deleteTodo(@Param('id') id: string) : any {
        return this.todosService.deleteTodo(id);
    }
}
