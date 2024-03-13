import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pets } from "./pets.entity";

@Entity()
export class User{  //represents the shape of user table in dataBase
 
  @PrimaryGeneratedColumn()
  id:Number;

  @Column()
  name:string;

  @OneToMany(type=>Pets , pet=>pet.owner)
  pets:Pets[]


};