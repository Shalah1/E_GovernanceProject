import { SalaryForm } from './../Data/salaryform.dto';
import { adminRepository } from './../Repository/admin.repository';
import { EmployeeForm } from './../Data/employee.dto';
import { EmployeeRepository } from '../Repository/employee.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/Entity/employee.entity';
import { SalaryEntity } from 'src/Entity/salaryentity.entity';
import { SalaryRepository } from 'src/Repository/salary.repository';

@Injectable()
export class SalaryService {

    constructor(@InjectRepository(SalaryEntity)
    private salaryRepo: SalaryRepository,
    ) { }

    
    // $InsertUser(empDto:EmployeeForm):any {
    //     const myValues = new EmployeeEntity();

    //     myValues.name = empDto.name;
    //     myValues.email = empDto.email;
    //     myValues.password = empDto.password;

    //     return this.empRepo.save(myValues);
    // }

    insertSalary(mydto): any {
        return this.salaryRepo.save(mydto);
    }

    insertSAL(mydto): any {
        //const employeeAccount = new EmployeeEntity();

        // employeeAccount.name = mydto.name;
        // employeeAccount.email = mydto.email;
        // employeeAccount.password = mydto.password;
        //managerAccount.salary = mydto.salary;
        return this.salaryRepo.save(mydto);
    }

    getSalaryUsingAdminId(id): any {
        return this.salaryRepo.find({
            where: { id: id },
            relations: {
                admin: true,
            },
        });
    }

    getallNumbers() {
        //return this.adminRepo.sum
        return this.salaryRepo.count({
            select: {
                amount: true
            },
        })
    }

        async getSum(): Promise<number> {
    const sum = await this.salaryRepo
      .createQueryBuilder()
      .select('SUM(amount)', 'sum')
      .getRawOne();

    return sum.sum;
  }
    deleteUserbyid(id):any {
    return this.salaryRepo.delete(id);
    }
}
