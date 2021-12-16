import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css']
})
export class WorksPageComponent implements OnInit {
  title: String = 'Proyectos'
  textInf1: String = 'Disculpa, este sitio aun esta en construcción.'
  texInfo2: String = 'Estoy pensando en nuevos proyectos.'

  proyects: Array<any> = [
    {
      imgProyect: './assets/images/spotify.jpg',
      title: 'Spotify-clon',
      info: 'Disculpa, este sitio aun esta en construcción.',
      router: ''
    },
    {
      imgProyect: './assets/images/clima.jfif',
      title: 'Clima',
      info: 'Disculpa, este sitio aun esta en construcción.',
      router: ''
    },
    {
      imgProyect: './assets/images/foro.png',
      title: 'Foro',
      info: 'Disculpa, este sitio aun esta en construcción.',
      router: ''
    },
    {
      imgProyect: './assets/images/ecommerce.jfif',
      title: 'Ecommerce',
      info: 'Disculpa, este sitio aun esta en construcción.',
      router: ''
    },
    {
      imgProyect: './assets/images/dashboard.jfif',
      title: 'Administrador de Ventas',
      info: 'Disculpa, este sitio aun esta en construcción.',
      router: ''
    },
    {
      imgProyect: './assets/images/pensnado.png',
      title: 'Pensando...',
      info: 'Disculpa, este sitio aun esta en construcción.',
      router: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
