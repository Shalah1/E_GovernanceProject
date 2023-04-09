import { EmployeeRepository } from './../Repository/employee.repository';
import { EmployeeEntity } from 'src/Entity/employee.entity';
import { AdminEntity } from 'src/Entity/adminentity.entity';
import { adminRepository } from './../Repository/admin.repository';
import { All, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AllUsersEntity } from "src/Entity/allusers.signup.entity";
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AllUsersSignUpForm } from 'src/Data/allusers.signupform';
import { emit } from "process";
import { SignUpRepository } from "src/Repository/allusers.signup.repository";


@Injectable()
export class SignUpService {

    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo:  adminRepository,
        //private signupRepo: Repository<AllUsersEntity>
        @InjectRepository(AllUsersEntity)
        private userRepo: SignUpRepository,

        @InjectRepository(EmployeeEntity)
        private empRepo: EmployeeRepository,
        
    ) { }
    

    async signup(mydto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(mydto.password, salt);
    mydto.password= hassedpassed;
    return this.userRepo.save(mydto);
    }

    // async signin(mydto) {   //actual code
    //     //console.log(mydto.password);
    //     const mydata = await this.userRepo.findOneBy({ email: mydto.email });

    //     const empdata = await this.empRepo.findOneBy({email:mydto.email})
    //     /// isMatch = null;
    //     let isMatch = false;
    //     let isMatch2 = false;
    //     if (mydata) {
    //          isMatch = await bcrypt.compare(mydto.password, mydata.password);
    //     }

    //     if (empdata) {
    //         isMatch = await bcrypt.compare(mydto.password, empdata.password);
    //     }
    //      //isMatch = await bcrypt.compare(mydto.password, mydata.password);

    //     else {
    //         const adminData = await this.adminRepo.findOneBy({ email: mydto.email });
    //         console.log(adminData);

    //         const empData = await this.empRepo.findOneBy({ email: mydto.email });
    //         console.log(empData);
    //         //isMatch = await bcrypt.compare(mydto.password, mydata2.password);
    //         isMatch = (adminData.password == mydto.password)

    //         //isMatch2 = (empData.password == mydto.password)
            
    //     }

    //     if (isMatch) {
    //         return 1;
    //     }
    //     if(isMatch2) {
    //         return 1;
    //     }
    //     else {
    //         return 0;
    //     }
        //       async signin(email: string): Promise<AllUsersEntity | undefined> {
        //     return this.userRepo.findOne({ where: { email } });
        //   }

    

//     async signin2(mydto):Promise<any>{
//     console.log(mydto.password);
// const mydata= await this.empRepo.findOneBy({email: mydto.email});
// const isMatch= await bcrypt.compare(mydto.password, mydata.password);
// if(isMatch) {
// return 1;
// }
// else {
//     return 0;
// }

// }

async signin(mydto): Promise<any> {
    const doctor = await this.userRepo.findOne({ where: { email: mydto.email } });
    if (doctor) {
      const match = await bcrypt.compare(mydto.password, doctor.password); // Compare the hashed password with the provided password
      if (match) {
        return 1;
      }
    }
    return 0;
  }


}