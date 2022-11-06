import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout-one4",
  templateUrl: "./layout-one4.component.html",
  styleUrls: ["./layout-one4.component.scss"],
})
export class LayoutOne4Component implements OnInit {
  constructor() {}
  currentSection = "home";

  sub_title: string = "Bienvenido a";
  heading: string = "Grupo Comercial Peralea";
  content: string = "CREADA EN EL AÑO 2019 CON LA FINALIDAD DE SATISFACER LA DEMANDA Y LAS NECECIDADES COMERCIALES DE NUESTROS SOCIOS.";

  ngOnInit(): void {}
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      if (navbar !== null) {
        navbar.classList.add("nav-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar.classList.remove("nav-sticky");
      }
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    const nav = document.getElementById("navbarNav");
    if (nav !== null) {
      nav.classList.toggle("show");
    }
  }
}
