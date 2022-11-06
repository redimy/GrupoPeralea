import { Component, OnInit } from '@angular/core';

interface list{
  image:string;
  title:string;
  count:number;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
/**
 * Layout-1 portfolio component
 */
export class PortfolioComponent implements OnInit {

  constructor() { }

  portfolioList: list[] = [
    {
      image:'assets/layout/images/counter-img-1.png',
      title:'Proyectos terminados',
      count:257
    },
/*     {
      image:'assets/layout/images/counter-img-2.png',
      title:'Awards Wins',
      count:300
    }, */
    {
      image:'assets/layout/images/counter-img-3.png',
      title:'Clientes',
      count:500
    },
    {
      image:'assets/layout/images/counter-img-4.png',
      title:'Paises',
      count:11
    }
  ];
  
  ngOnInit(): void {
  }

}
