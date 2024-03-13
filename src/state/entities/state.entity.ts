import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'state'})
export class State {
  @PrimaryGeneratedColumn()
  id:Number;

  @Column()
  name:string;

  @Column()
  capital:string;
}
