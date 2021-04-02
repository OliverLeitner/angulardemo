import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badroute',
  templateUrl: './badroute.component.html',
  styleUrls: ['./badroute.component.less']
})
export class BadrouteComponent implements OnInit {
  subcomponent: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
