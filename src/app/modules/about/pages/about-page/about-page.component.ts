import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  photo: any = './assets/images/italo.jpg'
  name: String = 'ITALO GUEVARA PROGRAMADOR WEB'
  footerPower: String = 'Powered By'

  constructor() { }

  ngOnInit(): void {
  } 

}
