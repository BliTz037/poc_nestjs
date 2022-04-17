export class CreateTodoDto {
    readonly id: number;
    readonly name: string;
    readonly descripton?: string;
    readonly isDone: boolean;
}