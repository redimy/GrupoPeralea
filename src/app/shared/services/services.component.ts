import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


interface list{
  icon:string;
  title:string;
  content:string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
/**
 * Layout-1 services component
 */
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }
  faCoffee = faCoffee;

  heading:string = 'Nuestros Servicios';
  content:string = "Alto conocimiento de la región, alianzas estratégicas con proveedores de suministro, logístico y de construcción. diseñados a tu medida. flexibilidad, servicio al cliente e involucramiento en todo tiempo.";

  serviceList: list[] = [
    {
      icon:'fa-dollar-sign',
      title:'Comercio al por mayor de suministro y materia prima.',
      content:""
    },
    {
      icon:'fa-helmet-safety',
      title:'Comercio al por mayor de maquinaria y equipo para otros servicios y para actividades comerciales.',
      content:""
    },
    {
      icon:'fa-truck-fast',
      title:'Logística, Autotransporte local y foráneo de carga general.',
      content:""
    },
    {
      icon:'fa-user-tie',
      title:'Administración y supervisión de construcción de otras obras de ingeniería civil u obra pesada. ',
      content:""
    },
    {
      icon:'fa-building',
      title:'Administración y supervisión de Construcción de inmuebles comerciales, institucionales y de servicios.',
      content:""
    },
    {
      icon:'fa-industry',
      title:'Comercio al por mayor de maquinaria y equipo para la industria manufacturera ',
      content:""
    }
  ];

  ngOnInit(): void {
    let path = this.router.url.split("/")[1];
    if (path === 'layout-one-1') {
      const navbar1 = document.getElementById('services');
      if (navbar1 !== null) {
        navbar1.classList.add('service-layout-1');
      }
    }
  }

}
