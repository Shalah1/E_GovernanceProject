import { DoctorEntity } from 'src/Entity/doctor.entity';
import { DoctorService } from './../Services/doctor.service';
import { SalaryService } from 'src/Services/salaryservice.service';
import { SalaryEntity } from './../Entity/salaryentity.entity';
import { SignUpRepository } from './../Repository/allusers.signup.repository';
import { SignUpService } from 'src/Services/allusers.signup.service';
import { SignUpController } from 'src/Controller/allusers.signup.controller';
import { AllUsersEntity } from '../Entity/allusers.signup.entity';
import { EmployeeService } from 'src/Services/employee.service';
import { EmployeeEntity } from 'src/Entity/employee.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "src/Entity/adminentity.entity";
import { AdminController } from "../Controller/admin.controller"
import { AdminService } from "../Services/adminservice.service"
import { MailerModule } from '@nestjs-modules/mailer';
// import { ManagerService } from "src/manager/manager.service";
// import { ManagerEntity } from "src/manager/manager.entity";


@Module({
imports: [MailerModule.forRoot({
        transport: {
          host: 'smtp.gmail.com',
                   port: 465,
                   //ignoreTLS: false,
                   secure: true,
                   auth: {
                       user: 'islammasayekh@gmail.com',
                       pass: 'cvlvaspowjlvdxvu'
    },
    tls: {
      rejectUnauthorized: false,
                   }
                  }
}), TypeOrmModule.forFeature([ AdminEntity, EmployeeEntity, AllUsersEntity, SalaryEntity, DoctorEntity]) ],
controllers: [AdminController],
providers: [AdminService,EmployeeService,SalaryService,DoctorService],

})

export class AdminModule {}