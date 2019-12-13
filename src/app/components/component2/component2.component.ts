import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  celsius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
