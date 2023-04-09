import { DoctorEntity } from 'src/Entity/doctor.entity';
import { DoctorService } from './../Services/doctor.service';
import { EmployeeEntity } from 'src/Entity/employee.entity';
import { EmployeeController } from './../Controller/employee.controller';
import { EmployeeService } from 'src/Services/employee.service';
import { AdminEntity } from 'src/Entity/adminentity.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SignUpController } from "src/Controller/allusers.signup.controller";
import { AllUsersEntity } from "src/Entity/allusers.signup.entity";
import { SignUpService } from "src/Services/allusers.signup.service";
import { EmployeeService2 } from 'src/Services/employeeservice2.service';
import { EmployeeEntity2 } from 'src/Entity/employee2.entity';


@Module({
imports: [TypeOrmModule.forFeature([AllUsersEntity,AdminEntity, EmployeeEntity, EmployeeEntity2, DoctorEntity])],
controllers: [SignUpController,EmployeeController],
providers: [SignUpService,EmployeeService, EmployeeService2,DoctorService],

})

export class AllUsersSignUpModule {}