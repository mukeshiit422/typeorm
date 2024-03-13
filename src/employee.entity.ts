import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Task } from "./task.entity";
import { Meetings } from "./meetings.entity";

@Entity()
export class Employee{
  @PrimaryGeneratedColumn()
  id:Number;

  @Column()
  name:string;

  @ManyToOne(()=>Employee , (employee)=>employee.directReports,{onDelete:"SET NULL"})
  manager:Employee

  @OneToMany(()=>Employee,(employee)=>employee.manager)
  directReports:Employee[]

  @OneToOne(()=>ContactInfo , (contactInfo)=>contactInfo.employee)
  contactInfo:ContactInfo

  @OneToMany(()=>Task , (task)=>task.employee)
  task:Task[]

  @ManyToMany(()=>Meetings ,(meetings)=>meetings.attendee)
  @JoinTable()
  meetings:Meetings[]

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}