import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { CitiesModule } from './cities/cities.module';
import { StateModule } from './state/state.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { Employee } from './employee.entity';
import { ContactInfo } from './contact-info.entity';
import { Meetings } from './meetings.entity';
import { Task } from './task.entity';
import { GetUser } from './getUser.service';


@Module({
  imports :[ConfigModule.forRoot(),TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:(configService:ConfigService)=>({
       type: 'postgres',
       host:configService.get('DB_HOST'),
       port:+configService.get('DB_PORT'),
       username:configService.get('DB_USERNAME'),
       password:configService.get('DB_PASSWORD'),
       database:configService.get('DB_NAME'),
       entities:[join(process.cwd(),'dist/**/*.entity{.js,.ts}')],
       synchronize:true
    })
  }),TypeOrmModule.forFeature([Employee,ContactInfo,Meetings,Task])],
  //StateModule,CitiesModule, UserModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService,GetUser],
})
export class AppModule {}
