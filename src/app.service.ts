import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable ,Inject} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './interface/userInterfac';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private  cacheManager: Cache,
  @InjectModel('User') private  UserModel: Model<UserModel>) {}
  
  async getHello() {
     await this.cacheManager.set("cache_item", {key:32});
     await this.cacheManager.del("cache_item");
      const cachedItem = await this.cacheManager.get("cache_item");
      console.log('this cached item',cachedItem);
    return 'Hello World!';
  }
  async findOne(id: string) {
    const user = await this.UserModel.findById(id).exec();
    console.log('this cached item',user);
    return user;
  }
}
