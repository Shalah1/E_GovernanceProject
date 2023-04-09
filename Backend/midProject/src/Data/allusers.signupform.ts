import { IsNotEmpty, IsEmail, Matches, IsString, MinLength, MaxLength, IsEnum, IsMobilePhone, IsOptional, IsLatLong } from "class-validator";
import { IsFile, MaxFileSize, HasMimeType, MemoryStoredFile } from "nestjs-form-data";
import {  GenderType } from "./user.enums";

export class AllUsersSignUpForm {
    //validation cols

    @IsNotEmpty()
    required: true;
    name: string;

    @IsEmail()
    @Matches(/@/, { message: 'email not valid' })
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(16)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n]  )(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
    password: string;

    @IsNotEmpty()
    gender: GenderType;

    @IsNotEmpty()
    address: string;

    @IsFile()
    @MaxFileSize(1e6)
    @HasMimeType([ 'image/jpeg', 'image/png', 'image/jpg', '.txt' ])
    //avatar: MemoryStoredFile;
    profilepic: string;

    @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
        message: "$property must be formatted as yyyy-mm-dd"
    })
    DOB: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phonenumber: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    Role: number;
}

export class AllUsersSignUpForm2{
    password: string;
    email: string;

}