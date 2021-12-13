import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  infoText1: String = 'Puedo apoyar tu proyecto de diferentes formas. ¿Qué tal si comenzamos con una entrevista tomando un café?'
  infoText2: String = 'Permiteme brindarte toda la asesoria en tu proyecto para asegurar tu presencia en la web'
  infoText3: String = 'Proceso de evaluación'
  infoText4: String = 'Desarrollo web'
  infoText5: String = 'Creo una presencia en la web que atrae usuarios y convierte visitantes en clientes leales. Organiza tus objetivos que yo me encargo de hacerlos realidad'
  infoText6: String = 'Tecnologías'

  infItems: Array<String>=[
    'Definir metas y necesidades', 
    'Identificar prioridades',
    'Definir producto mínimo viable',
    'Crear hoja de ruta del proyecto'
]


  constructor() { }

  ngOnInit(): void {
  }

}
