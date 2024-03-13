import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './entities/state.entity';
import { Repository } from 'typeorm';
import { UpdateStateDto } from './dto/update-state.dto';

@Injectable()
export class StateService {
  constructor(@InjectRepository(State) private readonly stateRepository:Repository<State>){}
  async create(createStateDto: CreateStateDto) {
    const state=this.stateRepository.create(createStateDto);
    return await this.stateRepository.save( state);
  }

  async findAll() {
    return await this.stateRepository.find();
  }

  async findOne(id: number) {
    return await this.stateRepository.findOne({
      where :{id} });
  }

  async update(id: number, updateCityDto: UpdateStateDto) {
    const  state=await this.findOne(id);
     if(! state)
      throw new NotFoundException();

      Object.assign( state,updateCityDto);
      return await this.stateRepository.save( state);

    }

  async remove(id: number) {
    const  state=await this.findOne(id);
     if(! state)
      throw new NotFoundException();
    return await this.stateRepository.remove( state);
  }
}
