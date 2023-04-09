import { IsNotEmpty, IsInt, Length, IsEmail } from "class-validator";

export class AdminForm {   
   

   @IsNotEmpty()
    name: string;
   
   @IsEmail() 
    email: string;

    @Length(3,15)
    password: string;

    
    salary: number;  
 
    //address: string;


}

export class AdminName{
    name: string;
}