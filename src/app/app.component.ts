import { Component/*, ChangeDetectorRef*/} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ngCalendar';
  /*public headerAppHeaight: number;
  public mainAppHeight: number;*/

  constructor(
    // private cdref: ChangeDetectorRef
  ){}

  /*getHeaderHeight($data){
    this.headerAppHeaight = $data;
    this.mainAppHeight = window.innerHeight - this.headerAppHeaight;
    this.cdref.detectChanges();
  }*/
}
