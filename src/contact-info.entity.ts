import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class ContactInfo{
  @PrimaryGeneratedColumn()
  id:Number;

  @Column()
  phone:Number;

  @Column()
  email:String;
 
  @OneToOne(()=> Employee,(employee)=>employee.contactInfo,{onDelete:'CASCADE'})
  @JoinColumn()
  employee:Employee
}