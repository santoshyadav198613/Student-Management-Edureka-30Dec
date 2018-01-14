import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class DbloggerService extends LoggerService {

  constructor() {
    super();
  }

  log() {
    console.log('This is DB logger');
  }

}
