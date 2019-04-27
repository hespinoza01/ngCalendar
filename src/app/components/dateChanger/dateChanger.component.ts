import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'date-changer',
  templateUrl: 'dateChanger.component.html',
  styleUrls: ['dateChanger.component.css']
})


export class DateChangerComponent implements OnInit{
  @Input() type: string;
  public label: any;

  constructor(
    private date: DateService
  ){}

  ngOnInit(){
    switch (this.type) {
      case 'month':
        this.label = this.date.monthList[this.date.date.getMonth()];
        break;

      case 'year':
        this.label = `${this.date.date.getFullYear()}`;
        break;
    }
  }

  onLessPress(){
    switch (this.type) {
      case 'month':
        this.date.lessMonth();
        this.label = this.date.monthList[this.date.month];
        break;

      case 'year':
        this.date.lessYear();
        this.label = `${this.date.date.getFullYear()}`;
        break;
    }

    this.date.updateDate();
  }

  onPlussPress(){
    switch (this.type) {
      case 'month':
        this.date.plusMonth();
        this.label = this.date.monthList[this.date.month];
        break;

      case 'year':
        this.date.plusYear();
        this.label = `${this.date.date.getFullYear()}`;
        break;
    }

    this.date.updateDate();
  }
}
