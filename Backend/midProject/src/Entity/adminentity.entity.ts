import { SalaryEntity } from './salaryentity.entity';
import { Entity, JoinColumn, OneToMany } from 'typeorm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
@Entity("admin")
export class AdminEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salary: number;

  @OneToMany(() => EmployeeEntity, (employee) => employee.admin)
  employees: EmployeeEntity[];

  @OneToMany(() => SalaryEntity, (salary) => salary.admin)
  salarys: SalaryEntity[];

  
}
    