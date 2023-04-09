
import { AllUsersEntity } from 'src/Entity/allusers.signup.entity';
import { SessionGuard } from './session.guard';
import { AllUsersSignUpForm, AllUsersSignUpForm2 } from './../Data/allusers.signupform';
import { BadRequestException, Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, ParseIntPipe, Post, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { Body, Delete, HttpCode, Param, Patch, Session, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SignUpService } from 'src/Services/allusers.signup.service';
import * as bcrypt from "bcrypt";


@Controller('users')                        

export class SignUpController {            
    constructor(private readonly signupService: SignUpService) { }
    
    @Post('/signup')
    @UseInterceptors(FileInterceptor('profilepic',
        {                   
            storage: diskStorage({     
                destination: './uploads',
                filename: function (req, file, cb)  {
                    cb(null, Date.now() + file.originalname)
                }
            }),
            fileFilter: (req, file, cb) => {

            
                if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                    return cb(null, false);
                } cb(null, true);
            }
        }))
       
    signup(@Body() signUpDto: AllUsersSignUpForm, @UploadedFile() file: Express.Multer.File) {

        if (!file) {
            //return{message:"an image needed!!"}
            throw new BadRequestException("File is not an image!");
        } else {
            signUpDto.profilepic = file.filename;
            return this.signupService.signup(signUpDto);
        }
    }

    @Post('signin')
  async signIn(
    @Session() session, @Body() mydto:AllUsersSignUpForm,
    @Body() { email, password }: { email: string; password: string }): Promise<any> {
    const doctor = await this.signupService.signin(mydto);
        if (doctor) {
            session.email = mydto.email;
            session.password = mydto.password;
            console.log(session.email);
            console.log(session.password);
      return { message: 'Done' };
    } else {
      return { message: 'not Done' };
    }
  }

//     @Post('/signin')
// signin2(@Session() session, @Body() mydto:AllUsersSignUpForm)
// {
// if(this.signupService.signin(mydto))
// {
//   session.email = mydto.email;

//   console.log(session.email);
//   return {message:"success"};

// }
// else
// {
//   return {message:"invalid credentials"};
// }
//  }

    @Get("/signout")
    signout(@Session() session) {
        if (session.destroy()) {
            return {messege:"logged out!"}
        } else {
            throw new UnauthorizedException("invalide!!");
        }
    }
}