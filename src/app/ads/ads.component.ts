import { Component } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
title: string; 
ads = [{id:1,title:'60',img:'https://via.placeholder.com/150 '},{id:1,title:'80',img:'https://via.placeholder.com/150 '},{id:1,title:'80',img:'https://via.placeholder.com/150 '},{id:1,title:'80',img:'https://via.placeholder.com/150 '}]
constructor(){
  this.title ="NEKRETNINE U TREBINJU"
}
}
