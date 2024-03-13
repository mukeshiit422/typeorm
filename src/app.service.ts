import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { DataSource, Repository } from 'typeorm';
import { ContactInfo } from './contact-info.entity';
import { Task } from './task.entity';
import { Meetings } from './meetings.entity';
import { GetUser } from './getUser.service';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Employee) private employeeRepo:Repository<Employee>,
   @InjectRepository(ContactInfo) private contactInfoRepo:Repository<ContactInfo>,
   @InjectRepository(Task) private taskRepo:Repository<Task>,
   @InjectRepository(Meetings) private meetingsRepo:Repository<Meetings>,
   private getUser:GetUser
  ){}
  async seed(){
    const ceo=this.employeeRepo.create({name:"Mr Gudu"});
    await this.employeeRepo.save(ceo);

    const contactInfo=this.contactInfoRepo.create({
      email:"emailGudu@gmail.com",
      phone:123
    })

    contactInfo.employee=ceo;
    await this.contactInfoRepo.save(contactInfo);

    const manager=this.employeeRepo.create({
      name:"Ravi",
      manager:ceo
    })
    const task1=this.taskRepo.create({name:"solve quiz"});
    await this.taskRepo.save(task1);
    const task2=this.taskRepo.create({name:"answer"});
     await this.taskRepo.save(task2);

    const meetings=this.meetingsRepo.create({url:"meeting3"});
   await this.meetingsRepo.save(meetings);
    meetings.attendee=[ceo];
    manager.meetings=[meetings]
    manager.task=[task1,task2];

   await this.employeeRepo.save(manager);
  }

  async getElementById(id:Number){
    return this.employeeRepo.findOne({
      where:{
        id:id
      },
      relations:{
        manager:true,
        directReports:true,
        task:true
      }
    })

  
     // relations: ['manager','directReports','contactInfo','task','meetings']}
     
  }
  async getAllusers():Promise<any>{
    //const useRepo=this.employeeRepo.createQueryBuilder().select("id","myId").addSelect("name","myName").getRawOne();
    const repo=this.employeeRepo.query(`select e.id as "UserId(jhuh hbhb)", e.name as myName from employee e `)
    //const user=this.employeeRepo.find({
      //select:["id","name"]
    //})
    return repo;

  }
  async userAll():Promise<any>{
    const employee = await this.getUser.getUser();
    // const dataChange=employee.map((e)=>({
    //   ...e,
    //   id:e.id==6 ? "six":1,
    //   "full_name hh yy":e.name
    // }))
    // console.log("dataChange>>",dataChange)
    return employee;
  }
  // getHello(): string {
  //   return 'Hello World!';
  // }
}
