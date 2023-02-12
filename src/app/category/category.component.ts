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
  @Input()
  results!: Ad[];
  currentPage = 1;
  resultsPerPage = 12;
  id: string | undefined; 
  titleCategory : string | undefined ;
  catOneSelected = false ;
  catTwoSelected = false; 
  catThreeSelecteD = false ; 
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
    }if(this.id =="2"){
      this.catTwoSelected = true  ;
    }if(this.id=="3"){
      this.catThreeSelecteD = true ; 
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
    axios.get('http://localhost/tvikoBackEnd/listByCategory.php?id='+this.id).then((res) => {
      this.results = res.data
      console.log(res.data)
    })
  }
}