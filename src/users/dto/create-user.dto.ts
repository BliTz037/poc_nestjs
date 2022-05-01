import { IsNotEmpty, IsString, MaxLength } from "class-validator";

class CreateUserDto {
    @IsNotEmpty() @MaxLength(294) @IsString()
    email: string;
    
    @IsNotEmpty() @MaxLength(255) @IsString()
    firstName: string;

    @IsNotEmpty() @MaxLength(255) @IsString()
    lastName: string;

    @IsNotEmpty() @IsString()
    password: string;
}

export default CreateUserDto;