import { DoctorModule } from './Modules/doctor.module';
import { AdminController } from './Controller/admin.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './Modules/adminmodule.module';
import { typeOrmModuleConfig } from './Config/typeorm.config';
import { EmployeeModule } from './Modules/employee.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { AllUsersSignUpModule } from './Modules/alluser.signup.module';
import { EmployeeModule2 } from './Modules/employee2module.module';
//import { ManagerModule } from './manager/manager.module';


@Module({
  imports: [
        NestjsFormDataModule,
        AdminModule, EmployeeModule,
        AllUsersSignUpModule, DoctorModule,
        EmployeeModule2,
        TypeOrmModule.forRoot(typeOrmModuleConfig)
  ],                      
  controllers: [],
  providers: [],
})
export class AppModule {}