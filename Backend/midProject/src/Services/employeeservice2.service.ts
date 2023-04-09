import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeFormUpdate2 } from "src/Data/employeeupdate.dto";
import { EmployeeEntity2 } from "src/Entity/employee2.entity";
import { Repository } from 'typeorm';


@Injectable()
export class EmployeeService2 {
 
    constructor(
        @InjectRepository(EmployeeEntity2)
        private employeeRepo2: Repository<EmployeeEntity2>,
        ) {}

getIndex2():any { 
    return this.employeeRepo2.find();

}
getUser2ByID(id):any {
    return this.employeeRepo2.findOneBy({ id });
}

getUser2ByIDName(qry):any {
    return this.employeeRepo2.findOneBy({ id:qry.id,name:qry.name });
}


updateUser2(name,email):any {
   
  return this.employeeRepo2.update({email:email},{name:name});
  }

  updateUser2byid(mydto:EmployeeFormUpdate2,id):any {
    return this.employeeRepo2.update(id,mydto);
       }

 deleteUser2byid(id):any {
    
        return this.employeeRepo2.delete(id);
    }

insertEmployee2(mydto):any {
    
    return this.employeeRepo2.save(mydto);
       }
       getEmployee2sByemployeeID(id):any {
         return this.employeeRepo2.find({ 
                 where: {id:id},
             relations: {
                 employee: true,
             },
          });
       }



updateemployee2(mydto):any {
    
    return this.employeeRepo2.save(mydto);
       }
       Updateemployee2ByemployeeID(id):any {
         return this.employeeRepo2.find({ 
                 where: {id:id},
             relations: {
                 employee: true,
             },
          });
     }




updateemployee2byid(mydto):any {
    return this.employeeRepo2.save(mydto);
           }
           Updateemployees2ByemployeeID(id):any {
            return this.employeeRepo2.find({ 
                    where: {id:id},
                relations: {
                    employee: true,
                },
             });
        }
   
}