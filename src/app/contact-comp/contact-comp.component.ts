import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-contact-comp',
  templateUrl: './contact-comp.component.html',
  styleUrls: ['./contact-comp.component.css']
})
export class ContactCompComponent {
    API_KEY = "Tviko1998Trebinje"
    instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${this.API_KEY}`
    }
  });

  name : any
  lastName : any
  email : any
  phone : any
  text : any
  emailSent = false ;
  formError = false;

submit(){
  let mail = {
  name:this.name , fname:this.lastName , email:this.email , phone:this.phone , text:this.text 
  } 
  if(!isNaN(this.phone) ){
    this.instance.post("https://backoffice.tvikonekretnine.com/mail.php",mail).then((res: any) => {
      console.log(res)

    this.emailSent  = true 
    }).catch(() => {
      this.formError = false
    })
  } 
}


}
