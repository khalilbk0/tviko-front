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
    loop: false,
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
    nav: true,  
  } 
  arrayPreview!: string[];
preview(src:string){ 
  this.imagePreview = src
  this.isOpened = true
}
nextImage(){ 
  const arrayOfPics : string[] = [];
   const el = (this.slidesStore.filter(element => element.src == this.imagePreview))
   this.slidesStore.map(el => {
    arrayOfPics.push(el.src)
   })  
   let index = arrayOfPics.indexOf(this.imagePreview)
   if(arrayOfPics[index+1] !== undefined) {
    this.imagePreview = arrayOfPics[index+1]
   }else{
    this.imagePreview = arrayOfPics[0]
   }
   
  }
  prevImage(){ 
    const arrayOfPics : string[] = [];
     const el = (this.slidesStore.filter(element => element.src == this.imagePreview))
     this.slidesStore.map(el => {
      arrayOfPics.push(el.src)
     })  
     let index = arrayOfPics.indexOf(this.imagePreview)
     if(arrayOfPics[index-1] !== undefined) {
      this.imagePreview = arrayOfPics[index-1]
     }else{
      this.imagePreview = arrayOfPics[arrayOfPics.length-1]
     }
     
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
      this.id = params['id'];
      
      const API_KEY = "Tviko1998Trebinje"
      const instance = axios.create({
         
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      });

    if(params["id"] == "0") {
      this.ad = {
        "id": "70",
        "squarefeet": "60",
        "adress": "Republike Srpske 1", 
        "rooms": "četvorosob",
        "description": "Lorem Ipsum text",
        "stage": "II", 
        "structure": {
          "kitchen": "120",
          "lRoom": "150",
          "Broom": "11",
          "Kroom": "12",
          "Btroom": "150"
      }
      }
      this.slidesStore = [{id:0,src:'https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg',title:'test'},{id:0,src:'https://images.adsttc.com/media/images/5ecd/d50b/b357/65c6/7300/009e/medium_jpg/02D.jpg?1590547704',title:'test'},{id:4,src:'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',title:'test'}]
    }else{
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
      
    }
  ); 
  }

  ngOnInit() {
    
 

  }
}
