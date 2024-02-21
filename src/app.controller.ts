import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello():Promise<User>{
    console.log("user>>>>>")
    return this.appService.createUser("mukesh")
  }
  // @Get(':id')
  // getUserById(@Param('id') id:string):User{
  //   return this.appService.getOneUser(Number(id))
  // }

  // @Post()
  // createuser(@Body b)
}
