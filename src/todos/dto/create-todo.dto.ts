import { IsBooleanString, IsNotEmpty, IsNumberString } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    name: string;

    descripton?: string;

    @IsNotEmpty() @IsBooleanString()
    isDone: boolean;
}