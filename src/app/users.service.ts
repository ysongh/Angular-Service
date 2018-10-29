import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UsersService{
  activeUsers = ['Song', 'Roy'];
  inactiveUsers = ['Coke', 'Ike'];
  
  constructor(private counterService: CounterService){}
  
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive;
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive;
  }
  
}