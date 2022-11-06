import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface emailToSend{
  email:string;
  subject:string;
  message:string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
/**
 * Layout-1 contact component
 */
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;

  // Form submition
  submit?: boolean;
  form = {

  }
  constructor() { }

  heading: string = "Contactanos";
  contact: string = "Nuestra misión es ser aliados comerciales de nuestos clientes, generando confianza y preocupados por el cumplimiento en tiempo y forma de los requerimientos de nuestos clientes. .";
  whatsappLink = "https://api.whatsapp.com/send?phone=523223494395&text=";
  emailToSend: emailToSend;
  ngOnInit(): void {   
  } 

  whatsappButton(myForm: NgForm){
    this.setVariables(myForm);
    let link = this.whatsappLink + 'Me interesa saber acerca de '+ this.emailToSend.subject.toUpperCase() + ': ' + 'Mi correo es: ' + this.emailToSend.email + '. ' + this.emailToSend.message;
    window.open(link, "_blank");
  }

  onSubmit(myForm: NgForm){
    this.setVariables(myForm);
    let link = "mailto:grupocomercialperalea@hotmail.com?subject="+ this.emailToSend.subject + "&body="+ this.emailToSend.message;
    window.open(link);
  }

  setVariables(myForm: NgForm){
    let correo: string = myForm.controls.email.value;
    let asunto: string = myForm.controls.subject.value;
    let mensaje: string = myForm.controls.body.value;

    return this.emailToSend = {
      email: correo,
      subject: asunto,
      message: mensaje
    }
  }

}
