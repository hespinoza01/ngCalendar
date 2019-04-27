import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: any;
  private dateCurrent: any = new Date();

  public days: Array<number>;
  public dayWeek: Array<number>;

  public monthList: Array<string> = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  public month: number;

  constructor() { }

  setDate(value){
    this.date = new Date(value);
    this.setDays();
    this.dayWeek = new Array(new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()).fill(' ');
    return this;
  }

  updateDate(){
    const dayValue = (this.date.getFullYear() === this.getCurrentYear() && this.date.getMonth() === this.getCurrentMonth()) ? this.getCurrentDay() : 1,
          element = document.querySelector('span.calendarItem.active');

    this.setDate(`${this.date.getFullYear()}/${this.date.getMonth() + 1}/${dayValue}`);
    if(element) element.classList.remove('active');
  }

  setDays(){
    const count = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate(),
      _days: Array<number> = [];

    for (let  i = 1; i <= count; i++){ _days.push(i); }

    this.days = _days;
  }

  lessMonth(){
    const _month = this.date.getMonth();
    this.date.setMonth((_month > 0) ? (_month - 1) : 11);
    this.month = this.date.getMonth();
  }

  plusMonth(){
    const _month = this.date.getMonth();
    this.date.setMonth((_month < 11) ? (_month + 1) : 0);
    this.month = this.date.getMonth();
  }

  lessYear(){
    this.date.setFullYear(this.date.getFullYear() - 1);
  }

  plusYear(){
    this.date.setFullYear(this.date.getFullYear() + 1);
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
