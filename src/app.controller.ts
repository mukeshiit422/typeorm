import { Body, Controller, Get, Param, Post ,Patch , Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCityDto } from './cities/dto/create-city.dto';
import { CitiesService } from './cities/cities.service';
import { UpdateCityDto } from './cities/dto/update-city.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
 async getHello(): Promise<any>{
   //await this.appService.seed();
   //return await this.appService.getElementById(5);
   //return "result";
  const employee =await this.appService.userAll();
  // const data=employee.map((emp)=>{
    
  // })
  for(let data of employee){
    
  }
  console.log("employee>>",employee)
  return employee;

  } 

 
}
