import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity("doctor")
export class DoctorEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  //  @Column()
  // speaciality: string;

  @Column()
  address: string;


  @ManyToOne(() => EmployeeEntity, (employee) => employee.doctors)
    employee: EmployeeEntity

}