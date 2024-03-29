import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsDateString()
    birthAt: string;

    @IsStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
        minLowercase: 0
    })
    password: string;


}