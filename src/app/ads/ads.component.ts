import { Component } from '@angular/core';
import axios from 'axios';
import { Ad } from '../ad';
import { AdsServiceService } from '../ads-service.service';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
 
  Category1!: any ;
  Category2!: any ; 
  Category3!: any ; 



 
  isCategoryThreeEmpty = false  ; 
   

  shortAdress(adress:string){
    if(adress.length > 20){
      return adress.substring(0,20) + "..."
    }
    else return adress
  }

setCategoryOne() {
  let category: any ;
  const API_KEY = "Tviko1998Trebinje"
  const instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  instance.get('https://backoffice.tvikonekretnine.com/listByCategory.php?id=1').then((res) => {
    this.Category1 = res.data 
     
  }).finally(() => {
    this.Category1 = Array(this.Category1[0] , this.Category1[1],this.Category1[2] , this.Category1[3])
  })
   
  

}




setCategoryTwo() {
  const API_KEY = "Tviko1998Trebinje"
  const instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  instance.get('https://backoffice.tvikonekretnine.com/listByCategory.php?id=2').then((res) => {
    this.Category2 = res.data 
  }).finally(() => { 
    if(this.Category2.length > 3) {
      this.Category2 = Array(this.Category2[0] , this.Category2[1],this.Category2[2] , this.Category2[3])
 
    }
  })
 
  
}
setCategoryThree() {

  const API_KEY = "Tviko1998Trebinje"
  const instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  instance.get('https://backoffice.tvikonekretnine.com/listByCategory.php?id=3').then((res) => {
    this.Category3 = res.data 
    if(res.data.length  > 0 ){
      this.isCategoryThreeEmpty = true
    }
  }).finally(() => { 
    if(this.Category3.length > 3) {
      this.Category3 = Array(this.Category3[0] , this.Category3[1],this.Category3[2] , this.Category3[3])
 
    }
  })
   

 
  
}



constructor(private categories:AdsServiceService){
}
ngOnInit() {  
this.setCategoryOne()
this.setCategoryTwo() 
this.setCategoryThree()
}

}
