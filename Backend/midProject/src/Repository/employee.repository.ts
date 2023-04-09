import { EmployeeEntity } from 'src/Entity/employee.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class EmployeeRepository extends Repository<EmployeeEntity>{}