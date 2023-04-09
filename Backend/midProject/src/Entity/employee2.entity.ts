import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity("employee2")
export class EmployeeEntity2{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  age: number;

  @Column()
  juniorrank: string;
  
  @Column()
  phonenumber: number;
  
  @Column()
  salary: number;
  
  @Column()
  doctorrating: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.employee2s)
    employee: EmployeeEntity

}