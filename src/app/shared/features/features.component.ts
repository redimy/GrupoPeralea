import { Component, OnInit } from "@angular/core";

interface list {
  icon?: string;
  title?: string;
  content?: string;
  contentList?: list[];
  image?: string;
}

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
/**
 * Layout-1 features component
 */
export class FeaturesComponent implements OnInit {
  constructor() {}

  sub_title: string = "Productos";
  content: string =
    "In an ideal world this website wouldn’t exist, a client would acknowledge the importance design starts.";

  featureList: list[] = [
    {
      icon: "",
      image: "assets/layout/images/construction/comercio.jpg",
      title: "Comercio al por mayor de suministro",
      content: "",
      contentList: [
        {
          icon: "fa-helmet-safety",
          content: "Equipo de Seguridad Personal ",
        },
        {
          icon: "fa-print",
          content: "Artículos de oficina, Promocionales",
        },
        {
          icon: "fa-broom",
          content: "Artículos de Limpieza",
        },
      ],
    },
    {
      icon: "",
      image: "assets/layout/images/construction/logistica.jpg",
      title: "Logística, autotransporte local y foráneo de cargageneral. ",
      content: "",
      contentList: [
        {
          content: "- Carga Regular",
        },
        {
          content: "- Carga Especializada",
        },
        {
          content: "- Almacenes",
        },
        {
          content: "- Logística",
        },
        {
          content: "- Tracto Transfer",
        },
        {
          content: "- Soluciones de transporte",
        },
        {
          content: "- Maniobra de carga especializada",
        },
        {
          content: "- Transporte Internacional EUA, Canadá y México",
        },
      ],
    },
    {
      icon: "",
      title: "Mantenimiento y construcción",
      image: "assets/layout/images/construction/construccion.jpg",
      content: '',
      contentList: [
        {
          content:
            "Administración y supervisión de construcción de otras obras de ingeniería civil u obra pesada",
        },
      ],
    },
    {
      icon: "",
      title: "Servicios de conservación y mantenimiento en general",
      image: "assets/layout/images/construction/toolbox.jpg",
      content: "",
      contentList: [
        {
          icon: "",
          content: "- Corrección de Fallas Eléctricas.",
        },
        {
          icon: "",
          content: "- Instalación de Nuevas ubicaciones de Voz y Datos.",
        },
        {
          icon: "",
          content: "- Trabajos de Herrería y Soldadura Eléctrica.",
        },
        {
          icon: "",
          content: "- Mantenimiento de Torres de Enfriamiento.",
        },
        {
          icon: "",
          content: "- Estandarización de Colores de acuerdo a Normas.",
        },
        {
          icon: "",
          content: "- Mantenimiento de Equipos de Bombeo.",
        },
        {
          icon: "",
          content: "- Mantenimiento de Motores Eléctricos.",
        },
        {
          icon: "",
          content:
            "- Atención y Corrección de fallas en Instalaciones Hidrosanitarias.",
        },
        {
          icon: "",
          content:
            "- Presupuestos y Ejecución de Trabajos de Impermeabilización, Pintura, Tablaroca, Plafones, Zoclos Etc.",
        },
        {
          icon: "",
          content:
            "- Servicios Correctivos En subestación Eléctrica y Circuitos Derivativos.",
        },
        {
          icon: "",
          content:
            "- Servicio de Mantenimiento Correctivo en Plantas de Emergencias.",
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
