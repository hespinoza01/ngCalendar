import { Component } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'main-app',
  templateUrl: 'main.component.html'
})

export class MainComponent {

  constructor(
    private date: DateService
  ){}

  ngOnInit(){
    this.date.setDate(new Date().toDateString());
  }

}
