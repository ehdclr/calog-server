import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
//@nestjs/mongoose
import { AllConfigType } from '../config/config.type';

@Injectable()
export class MongooseConfigService {
  constructor() {}
}
