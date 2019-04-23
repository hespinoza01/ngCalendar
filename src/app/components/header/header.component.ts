import { Component, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements AfterViewInit{
  public title = 'ngCalendar';
  @ViewChild('headerApp') headerApp: ElementRef;
  @Output() ancho = new EventEmitter();

  ngAfterViewInit(){
    this.ancho.emit(this.headerApp.nativeElement.offsetHeight);
  }
}

