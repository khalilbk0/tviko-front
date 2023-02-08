import { Component } from '@angular/core';

@Component({
  selector: 'app-ads2',
  templateUrl: './ads2.component.html',
  styleUrls: ['./ads2.component.css']
})
export class Ads2Component {
title: string; 
ads = [{id:1,title:'60',img:'https://via.placeholder.com/150 '},{id:1,title:'80',img:'https://via.placeholder.com/150 '},{id:1,title:'80',img:'https://via.placeholder.com/150 '},{id:1,title:'80',img:'https://via.placeholder.com/150 '}]
constructor(){
  this.title ="NEKRETNINE IZVAN TREBINJA"
}
}
