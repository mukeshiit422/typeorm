import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./employee.entity";
import { Task } from "./task.entity";
import { Meetings } from "./meetings.entity";
import { ContactInfo } from "./contact-info.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetUser{
 constructor(
  @InjectRepository(Employee) private employeeRep:Repository<Employee>,
  @InjectRepository(Task) private taskRepo:Repository<Task>,
  @InjectRepository(Meetings) private meetingsRepo:Repository<Meetings>,
  @InjectRepository(ContactInfo) private contactRepo:Repository<ContactInfo>
 ){}

  async getUser():Promise<any>{
    const format=`CASE WHEN employee.id = 3 THEN 'yes' ELSE 'NO' END`;
    const employee=await this.employeeRep.createQueryBuilder("employee")
    .leftJoinAndSelect("employee.task","task")
    .select(format,"idd")
    .addSelect("employee.name","my name(legal name)")
     .addSelect('task.name',"task_name")
    .addSelect(`TO_CHAR(employee."createdAt"::date,'d/mm/yy')`,'datenjn')
     //.addSelect(`DATE_FORMAT("createdAt"::TEXT,dd/mm/yyyy)`,'datenjn')
     .where(`employee."name" != 'Ravi'`)
     .orderBy("employee.id","ASC")
    .getRawMany();

    // const employee=this.employeeRep.find({
    //    relations:["task","contactInfo"]
    // })
  //  employee.forEach((user)=>{
  //     console.log("user>>",user.my name(legal name))
  //  })
    return employee;
  }
}