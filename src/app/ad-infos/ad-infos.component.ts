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
  slidesStore :string[] = [] ;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
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
  ad!: AdDetails;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.id = params['id'];
        console.log(this.id); // price

        axios.get('http://localhost/tvikoBackEnd/ad.php?id='+this.id).then((res) => {
          this.ad = res.data[0]
          this.slidesStore?.push(this.ad.mainImage)
          this.slidesStore.push(res.data[0].otherImages)
          console.log(this.slidesStore);  
          
        })
        
      }
    ); 

  }
}
