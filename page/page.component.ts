import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  show:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  seen()
  {
    this.show=!this.show
  }

}
