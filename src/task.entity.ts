import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Task{
  @PrimaryGeneratedColumn()
  id:Number;

  @Column()
  name:string;

  @ManyToOne(()=> Employee ,(employee)=>employee.task ,{onDelete:'SET NULL'})
  employee:Employee

  @Column({default:'NC'})
  updateType:string

}