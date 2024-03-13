import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Meetings{
  @PrimaryGeneratedColumn()
  id:Number;

  @Column()
  url:string;

  @ManyToMany(()=>Employee ,(employee)=>employee.meetings ,{onDelete:'SET NULL'})
  attendee:Employee[]

}