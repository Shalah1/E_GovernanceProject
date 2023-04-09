import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AdminEntity } from "./adminentity.entity";
import { DoctorEntity } from "./doctor.entity";
import { EmployeeEntity2 } from "./employee2.entity";

@Entity('employee')
export class EmployeeEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    // @Column()
    // profilepic: string;

    @Column()
    address: string;

    @Column()
    role: string;

    @ManyToOne(() => AdminEntity, (admin) => admin.employees, { onDelete: "CASCADE" })
    admin: AdminEntity;

    @OneToMany(() => EmployeeEntity2, (employee2s) => employee2s.employee)
    employee2s: EmployeeEntity2[]

    @OneToMany(() => DoctorEntity, (doctor) => doctor.employee)
    doctors: DoctorEntity[]

}