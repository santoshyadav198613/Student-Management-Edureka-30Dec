import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log() {
    console.log('This is file logger');
  }

}
