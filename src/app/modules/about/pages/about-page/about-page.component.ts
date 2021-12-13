import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  textInfo1: String = 'Soy un entusiasta, apasionado por la tecnología, principalmente por el desarrollo web, me caracterizo por ser alguien organizado, con alto gusto por los nuevos retos y el aprendizaje ágil de nuevas herramientas de desarrollo.';
  textInfo2: String = 'Habilidades - Herramientas'
  textInfo3: String = '¿Tienes un proyecto?'
  textDownload: String = 'Descarga mi Curriculum'
  
  skillTool: {
    defaultOption: Array<any>,

  } = { defaultOption:[] }

  constructor() { }

  ngOnInit(): void {
    this.skillTool.defaultOption = ['Angular','BootStrap','Css','Html','JavaScript','SpringBoot',
    'Java EE-SE','Api-Rest','MySQL','Git','GitHub',
    'Ingles B1']
  } 

}
