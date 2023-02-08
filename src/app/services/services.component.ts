import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services = [
    {icon:'../../assets/law.svg',title:'Zakonski sigurno',desc:'Poštovanje najviših standarda savremenog građevinarstva i primjena najkvalitetnijih materijala u izgradnji objekata.'},
    {icon:'../../assets/keys.svg',title:'Tradicionalno',desc:'25 godina iskustva uspješne prodaje stambenih, industrijskih i poslovnih objekata i zemljišta.'},
    {icon:'../../assets/house.svg',title:'Kvalitetno',desc:'Najviši standardi savremenog građevinarstva i primjena najkvalitetnijih materijala u izgradnji objekata.'},
    {icon:'../../assets/building.svg',title:'Profesionalno',desc:'Maksimalna posvećenost naših radnika garantuje poštovanje svih ugovorenih obaveza. Posvećenost našim klijentima je na prvom mjestu.'},
  ]

}
