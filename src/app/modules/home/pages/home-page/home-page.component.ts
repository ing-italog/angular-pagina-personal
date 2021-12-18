import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imgComputer: any = './assets/images/home-computer.png '
  imgMovil: any = './assets/images/movil.png'

  constructor() { }

  ngOnInit(): void {
    
  }

}
