import { IsNotEmpty, IsInt, Length, IsEmail, IsString } from "class-validator";

export class SalaryForm {   
   

   
    @IsNotEmpty()
    amount: number;

    @IsString()
    type:string;

    userID: number;

    admin: number;
 
    //address: string;


}
