import { Ad } from './../ad';
import { Component } from '@angular/core';
import axios from 'axios' ; 
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { AdDetails } from '../ad-details';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ad-infos',
  templateUrl: './ad-infos.component.html',
  styleUrls: ['./ad-infos.component.css']
})
export class AdInfosComponent {
  slidesStore : any[] = [] ;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    
    navSpeed: 700, 
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  } 
preview(src:string){ 
  this.imagePreview = src
  this.isOpened = true
}
closeModal(){
  this.imagePreview = "" ; 
  this.isOpened = false
}
  dynamicSlides = [
    {
      id: 1,
      src: 'https://via.placeholder.com/600/92c952',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/600/771796',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/600/24f355',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/600/d32776',
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/600/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
    },
  ];
  id : string | undefined;
  imagePreview !: string ;
  isOpened = false ; 
  ad :any ;
  constructor(private route: ActivatedRoute) { 


    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.id = params['id'];
      console.log(this.id); // price
      const API_KEY = "Tviko1998Trebinje"
      const instance = axios.create({
         
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      });

      instance.get('http://localhost/ad.php?id='+this.id).then((res) => {
        this.ad = res.data[0]
        var slides = {
          id: 1 , 
          src:res.data[0].mainImage ,
          title:'Image 1'
        }
        res.data[0].otherImages ; 
        this.slidesStore?.push(slides) 
        for (let i = 0; i < res.data[0].otherImages.length; i++) {
        
          var el = {
            id: 1 + Math.random() , 
            src:res.data[0].otherImages[i] ,
            title:''
          }
          this.slidesStore.push(el)
        }
        
      })
      
    }
  ); 
  }

  ngOnInit() {
    
 

  }
}
