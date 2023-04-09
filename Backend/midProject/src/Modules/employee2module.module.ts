import { EmployeeService2 } from 'src/Services/employeeservice2.service';
import { EmployeeController } from '../Controller/employee.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
// import { EmployeeEntity2 } from "src/Entity/employee2.entity";
import { EmployeeService } from 'src/Services/employee.service';
import { EmployeeRepository } from 'src/Repository/employee.repository';
import { EmployeeEntity2 } from 'src/Entity/employee2.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ EmployeeEntity2 ]) ],
    controllers: [],
    providers: [],
})

export class EmployeeModule2 { }