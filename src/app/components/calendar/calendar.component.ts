import { Component, Input } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css']
})

export class CalendarComponent {
  @Input() date: any = new Date();
  @Input() dayWeek: Array<string> = new Array(this.date.getDay()).fill(' ');
  public daysOfWeek: Array<string> = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  public currentDay: number = new Date().getDate();
  public currentMonth: number = new Date().getMonth();
  public currentYear: number = new Date().getFullYear();

  // Get days count for the current month
  Days() {
    const count = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
      _days: Array<number> = [];

    for (let  i = 1; i <= count; i++){ _days.push(i); }

    return _days;
  }

  changeActive($event){
    const next = $event.target,
        prev = next.parentElement.querySelector('.active');

    prev.classList.remove('active');
    next.classList.add('active');
  }

}
