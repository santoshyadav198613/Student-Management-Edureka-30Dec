import { Component, OnInit, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {

  @ContentChild('header') header: any;
  constructor() {
    console.log('this is header');
   }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.header);
  }

}
