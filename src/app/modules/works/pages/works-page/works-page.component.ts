import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css']
})
export class WorksPageComponent implements OnInit {  

  textInf1: String = 'Disculpa, este sitio aun esta en construcción.'
  texInfo2: String = 'Estoy pensando en nuevos proyectos.'

  constructor() { }

  ngOnInit(): void {
  }

}
