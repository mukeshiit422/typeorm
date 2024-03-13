import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
  constructor(@InjectRepository(City) private readonly citiesRepo:Repository<City>){}
  
  async create(createCityDto: CreateCityDto) {
    const city=this.citiesRepo.create(createCityDto);
    return await this.citiesRepo.save(city);
  }

  async findAll() {
    return await this.citiesRepo.find();
  }

  async findOne(id: number) {
    return await this.citiesRepo.findOne({
      where :{id} });
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    const city=await this.findOne(id);
     if(!city)
      throw new NotFoundException();

      Object.assign(city,updateCityDto);
      return await this.citiesRepo.save(city);

    }

  async remove(id: number) {
    const city=await this.findOne(id);
     if(!city)
      throw new NotFoundException();
    return await this.citiesRepo.remove(city);
  }
}
