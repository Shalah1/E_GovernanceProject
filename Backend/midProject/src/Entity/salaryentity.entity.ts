import { GenderType } from './../Data/user.enums';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { AdminEntity } from './adminentity.entity';

@Entity("salary")
export class SalaryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    type: string;

    @Column()
    userID: number;
    
    @ManyToOne(() => AdminEntity, (admin) => admin.salarys, { onDelete: "CASCADE" })
    admin: AdminEntity;

}
    //salary: number;
    

//   @OneToMany(() => EmployeeEntity, (employee) => employee.admin)
//     employees: EmployeeEntity[];

    