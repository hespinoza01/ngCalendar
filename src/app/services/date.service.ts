import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: any;
  private dateCurrent: any = new Date();

  public days: Array<number>;
  public dayWeek: Array<number>;

  constructor() { }

  setDate(value){
    this.date = new Date(value);
    this.setDays();
    this.dayWeek = new Array(new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()).fill(' ');
    return this;
  }

  setDays(){
    const count = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate(),
      _days: Array<number> = [];

    for (let  i = 1; i <= count; i++){ _days.push(i); }

    this.days = _days;
  }

  getCurrentYear(){
    return this.dateCurrent.getFullYear();
  }

  getCurrentMonth(){
    return this.dateCurrent.getMonth();
  }

  getCurrentDay(){
    return this.dateCurrent.getDate();
  }

}
