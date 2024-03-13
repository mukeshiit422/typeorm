import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cities'})
export class City {
  @PrimaryGeneratedColumn()
  id:Number;

  @Column({unique:true})
  name:string;

  @Column({type:'text' , nullable:true})
  description:string;

  @Column({type:'boolean' , default:true})
  active:boolean;
}
