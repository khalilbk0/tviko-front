import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ad } from '../ad';
import axios from 'axios' ; 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent  { 
  shortAdress(adress:string){
    if(adress.length > 20){
      return adress.substring(0,20) + "..."
    }
    else return adress
  }
  @Input()
  results!: any[];
  catThreeEmpty: boolean | undefined ;
  currentPage = 1;
  resultsPerPage = 8;
  id: string | undefined; 
  titleCategory : string | undefined ;
  catOneSelected = false ;
  catTwoSelected = false; 
  catThreeSelecteD = false ; 
   API_KEY = "Tviko1998Trebinje"
   instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${this.API_KEY}`
    }
  });
  ads : any | undefined ; 
  get startIndex() {
    return (this.currentPage - 1) * this.resultsPerPage;
  }

  get endIndex() {
    return this.startIndex + this.resultsPerPage;
  }
  
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    
  }
  catById(id:string){
    this.instance.get('https://backoffice.tvikonekretnine.com/listByCategory.php?id='+id).then((res) => {
      this.results = res.data
    })  
  }
  scrollToTop() {
     {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) { 
        window.scrollTo(0, currentScroll - (currentScroll / 1.2));
      }
    } 
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.scrollToTop()
    }
  }
  get totalPages() {
    return Math.ceil(this.results.length / this.resultsPerPage);
  }
  
  changetitle(){
    if(this.id=="1"){
      this.titleCategory = 'nice'
      this.catOneSelected = true ; 
      this.catTwoSelected = false ; 
      this.catThreeSelecteD = false ; 
      this.catById("1")
    }if(this.id =="2"){
     
      this.catOneSelected = false ; 
      this.catTwoSelected = true ; 
      this.catThreeSelecteD = false ; 
      this.catById("2")
    }if(this.id=="3"){
      this.catThreeSelecteD = true ; 
      this.catById("3")
      this.catOneSelected = false ; 
      this.catTwoSelected = false ;  
    }
    
  }
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.id = params['id'];
        console.log(this.id); // price

    this.changetitle() ; 
        
      }
    ); 
  
    
      let data ; 
      this.instance.get('https://backoffice.tvikonekretnine.com/listByCategory.php?id=3').then((res) => {
        if(res.data.length){
          this.catThreeEmpty = false ; 
        }else{
          this.catThreeEmpty = true ; 
        }

      })
     
  } 
}