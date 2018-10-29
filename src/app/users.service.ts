import { EventEmitter, Injectable } from '@angular/core';

//@Injectable()
export class UsersService{
  activeUsers = ['Song', 'Roy'];
  inactiveUsers = ['Coke', 'Ike'];
  
  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();
  
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  
}