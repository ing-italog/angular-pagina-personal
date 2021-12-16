import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  title: String = 'CONOCEME'
  photo: any = './assets/images/italo.jpg'
  name: String = 'ITALO GUEVARA PROGRAMADOR WEB'
  textInfo1: String = 'Hola! Soy un entusiasta, apasionado por la tecnología, principalmente por el desarrollo web, me caracterizo por ser alguien organizado, con alto gusto por los nuevos retos, actualmente soy estudiante de la UniAgustiana en Bogotá, si deseas saber mas de mi tomemonos un café y conversemos.';
  textInfo2: String = '¿Tienes un proyecto?'
  cvDownload: String = 'Descarga mi Curriculum'
  footerLocation: String = 'Ubicación: Bogotá - Colombia'
  footerDesined: String = 'Desarrollado por Italo guevara.'
  footerPower: String = 'Powered By'

  constructor() { }

  ngOnInit(): void {
  } 

}
