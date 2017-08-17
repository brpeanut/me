import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
declare var Reveal;
@Component({
  selector: 'app-current-work',
  templateUrl: './current-work.component.html',
  styleUrls: ['./current-work.component.css']
})
export class CurrentWorkComponent {
  public breadcrumbs:Array<any> = [
    { name: 'home', link: '/main' },
    { name: 'current work' },
  ];
  constructor() { }

  ngAfterViewInit() {
    Reveal.reveal('div.row', Globals.AnimationDuration);
  }

}
