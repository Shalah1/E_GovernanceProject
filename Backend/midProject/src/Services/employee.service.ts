import { EmployeeFormUpdate } from './../Data/employeeupdate.dto';
import { adminRepository } from './../Repository/admin.repository';
import { EmployeeForm, EmployeeForm3 } from './../Data/employee.dto';
import { EmployeeRepository } from '../Repository/employee.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/Entity/employee.entity';
import { MailerService } from "@nestjs-modules/mailer/dist";


@Injectable()
export class EmployeeService{

    constructor(@InjectRepository(EmployeeEntity)
    private empRepo: EmployeeRepository,
    private mailerService: MailerService,

    ) { }

    getallNames() {
        return this.empRepo.find({
            select: {
                name: true,
            },
        })
    }

    insertEmployee(mydto:EmployeeForm):any { //done
    //const employeeAccount = new EmployeeEntity();

    // employeeAccount.name = mydto.name;
    // employeeAccount.email = mydto.email;
    // employeeAccount.password = mydto.password;
    //managerAccount.salary = mydto.salary;
    return this.empRepo.save(mydto);
    }

    getAdminUsingEmpId(id): any{
        return this.empRepo.find({
            where: { id: id },
            relations: {
                admin: true,
            },
        });
    }

    getDashboard():any { 
    return this.empRepo.find();

}

    updateUserbyid(mydto:EmployeeForm3,id):any {
        return this.empRepo.update(id,mydto);
    }
    
       getEmpUsingAdminID(id): any{
        return this.empRepo.find({
            where: { id: id },
            relations: {
                admin: true
            },
        });

    }
    deleteEmployeeByAdminId(id: any) {
        const del = this.empRepo.findOne({where:{id:id,},});
        if (del) {
            return this.empRepo.delete({ id: id });
            } else {
                //throw new HttpException('not found', HttpStatus.NOT_FOUND);
            return ;
            }
    }
// rijfgioerhjgioerhsgjbvkertjghbiorthugbjiklrtojhbiotrhb
    
    
    getEmployee2sByemployeeID(id):any {
        return this.empRepo.find({ 
                where: {id:id},
            relations: {
                employee2s: true,
            },
         });
    }

    getEmployeeByEmployee2sID(id):any {
        return this.empRepo.find({ 
                where: {id:id},
            relations: {
                employee2s: true,
            },
         });

    }

    getDoctorsByemployeeID(id):any {
        return this.empRepo.find({ 
                where: {id:id},
            relations: {
                doctors: true,
            },
         });
    }
    getEmployeeByDoctorID(id):any {
        return this.empRepo.find({ 
                where: {id:id},
            relations: {
                doctors: true,
            },
         });
    }

    async sendEmail(mydata){
    return await this.mailerService.sendMail({
        to: mydata.email,
        subject: mydata.subject,
        text: mydata.text, 
      });
    }


}