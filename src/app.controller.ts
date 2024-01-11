import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CreateMongooseUserDto } from './dto/create-mongoose-user.dto';


@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }
}
