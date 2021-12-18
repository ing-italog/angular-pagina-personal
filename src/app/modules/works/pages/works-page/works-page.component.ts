import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css']
})
export class WorksPageComponent implements OnInit {

  proyects: Array<any> = [
    {
      imgProyect: './assets/images/spotify.jpg',
      title: 'Spotify-clon',
      router: ''
    },
    {
      imgProyect: './assets/images/clima.jfif',
      title: 'Weather',
      router: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
