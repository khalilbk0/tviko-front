import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent  {
  id 
 constructor(private _Activatedroute:ActivatedRoute){
  this.id=this._Activatedroute.snapshot.paramMap.get("id");

 }

} 
