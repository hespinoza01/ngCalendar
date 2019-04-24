import { Component } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'date-bar-control',
  templateUrl: 'dateBarControl.component.html',
  styleUrls: ['dateBarControl.component.css']
})

export class DateBarControlComponent {

  constructor(
    private date: DateService
  ){}
}
