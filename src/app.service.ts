import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}

  getAllUsers():Promise<User[]> {
    return this.userRepository.find({
      relations:['pets']
    });//select * from User
  }

  // async getOneUser(id: Number):Promise<User> {
  //   try{
  //     const user=await this.userRepository.fin
  //     return user;
  //   } 
  //   catch(err){
  //     throw err;
  //   }
  //   //select *from user where user.id==id
  // }

  createUser(name:string):Promise<User>{
      const newUser=this.userRepository.create({name});
      console.log("user>>",newUser)
      return this.userRepository.save(newUser);
  } 
  // async updateuser(id:Number , name:string):Promise<User>{
  //    const user=await this.getOneUser(id);
  //    user.name=name;
  //    return this.userRepository.save(user);
  // }
  
  // async deleteUser():Promise<User>{
  //   const user=await this.getOneUser(id);
  //  return  this.userRepository.remove(user);
  // }
  getHello(): string {
    return 'Hello World!';
  }
}
