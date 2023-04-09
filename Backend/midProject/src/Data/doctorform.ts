import { IsNotEmpty, IsInt, Length, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class DoctorForm {   
   
    @IsNotEmpty()
    name: string

    @IsEmail() 
    @IsNotEmpty()
    email: string;

    @MinLength(8)
    @MaxLength(16)
    @IsNotEmpty()
    password: string;

}
