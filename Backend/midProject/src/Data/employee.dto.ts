import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class EmployeeForm{
    //validation cols

    @IsNotEmpty()
    name: string; 

    @IsEmail()
    @Matches(/@/,{message: 'email not valid'})
    email: string;
    
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

    // @IsNotEmpty()
    // profilepic: string;

    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    address:string;

    adminId: number;
}

export class EmployeeForm3{
    @IsNotEmpty()
    name: string; 

    @IsEmail()
    @Matches(/@/,{message: 'email not valid'})
    email: string;
    
    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

    // @IsNotEmpty()
    // profilepic: string;

    @IsNotEmpty()
    role: string;

    @IsNotEmpty()
    address:string;
}