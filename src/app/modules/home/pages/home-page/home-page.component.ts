import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  textInfo1: String = 'ITALO GUEVARA - PROGRAMADOR WEB - BOGOTA, COL';
  textInfo2: String = 'Full Stack - SpringBoot & Angular';

  constructor() { }

  ngOnInit(): void {
    
  }

}
