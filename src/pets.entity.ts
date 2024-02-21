import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Pets{
   @PrimaryGeneratedColumn()
   id:Number;

   @Column()
   name:string;

   @ManyToMany(type=>User ,user=>user.pets)
   owner:User;
}