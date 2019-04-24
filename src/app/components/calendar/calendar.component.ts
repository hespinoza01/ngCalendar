import { Component } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css']
})

export class CalendarComponent {
  public daysOfWeek: Array<string> = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

  constructor(
    private date: DateService
  ){}

  changeActive($event){
    const next = $event.target,
        prev = next.parentElement.querySelector('.active');

    prev.classList.remove('active');
    next.classList.add('active');
  }

}
