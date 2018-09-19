import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}
  info(info: string) {
    console.info(info);
  }
  error(info: string) {
    console.error(info);
  }
  log(info: string) {
    console.log(info);
  }
}
