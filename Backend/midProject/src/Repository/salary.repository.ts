import { EmployeeEntity } from 'src/Entity/employee.entity';
import { SalaryEntity } from 'src/Entity/salaryentity.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class SalaryRepository extends Repository<SalaryEntity>{}