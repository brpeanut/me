import { Component, OnInit } from '@angular/core';
declare var Reveal;
@Component({
  selector: 'app-current-work',
  templateUrl: './current-work.component.html',
  styleUrls: ['./current-work.component.css']
})
export class CurrentWorkComponent {

  constructor() { }

  ngAfterViewInit() {
    Reveal.reveal('div.row', 20);
  }

}
