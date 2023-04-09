import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorEntity } from "src/Entity/doctor.entity";
import { Repository } from 'typeorm';



@Injectable()
export class DoctorService {
    constructor(
        @InjectRepository(DoctorEntity)

        private doctorRepo: Repository<DoctorEntity>,
      ) {}


insertDoctor(mydto):any {
    
    
   return this.doctorRepo.save(mydto);
      }
      getDoctorsByemployeeID(id):any {
        return this.doctorRepo.find({ 
                where: {id:id},
            relations: {
                employee: true,
            },
         });
    }

    Updatedoctor(mydto):any {
    
        return this.doctorRepo.save(mydto);
           }
           UpdatedoctorByemployeeID(id):any {
             return this.doctorRepo.find({ 
                     where: {id:id},
                 relations: {
                     employee: true,
                 },
              });
         }
}