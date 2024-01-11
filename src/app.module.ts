import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './dto/entities/mongoose-user.entity';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      socket:{ host: 'localhost',
      port: 6379,}
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],


})
export class AppModule {}

