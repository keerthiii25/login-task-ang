import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMe:boolean=false
  click:boolean=false
  me:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  toogle()
  {
    this.showMe=!this.showMe
    this.click = false;
    this.me = false;
  }
  too()
  {
    this.click=!this.click
    this.showMe = false;
    this.me = false;
  }
  tag()
  {
    this.me=!this.me
    this.click = false;
    this.showMe = false;
  }

}
