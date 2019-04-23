import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'date-changer',
  templateUrl: 'dateChanger.component.html',
  styleUrls: ['dateChanger.component.css']
})


export class DateChangerComponent implements OnInit{
  @Input() type: string;
  public label: string;

  ngOnInit(){
    switch (this.type) {
      case 'day':
        this.label = 'Día';
        break;

      case 'month':
        this.label = 'Mes';
        break;

      case 'year':
        this.label = 'Año';
        break;
    }
  }
}
