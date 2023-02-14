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

/*   const API_KEY = "Tviko1998Trebinje"
  const instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  instance.get('http://localhost/listByCategory.php?id=1').then((res) => {
    this.Category1 = res.data 
  }) */

 


this.Category1 = [{
  "id": "0",
  "squarefeet": "60",
  "adress": "Republike Srpske 1",
  "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
}, {
  "id": "0",
  "squarefeet": "60",
  "adress": "short adress short adress short adress",
  "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
} , {
  "id": "0",
  "squarefeet": "60",
  "adress": "Republike Srpske 1",
  "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
} , 
{
  "id": "0",
  "squarefeet": "60",
  "adress": "Republike Srpske 1",
  "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
}]

}




setCategoryTwo() {
/*   const API_KEY = "Tviko1998Trebinje"
  const instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  instance.get('http://localhost/listByCategory.php?id=2').then((res) => {
    this.Category2 = res.data 
  }) */

  this.Category2 = [{
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  }, {
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  } , {
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  } , 
  {
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  }]
  
}
setCategoryThree() {

/*   const API_KEY = "Tviko1998Trebinje"
  const instance = axios.create({
     
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  instance.get('http://localhost/listByCategory.php?id=3').then((res) => {
    this.Category3 = res.data 
    if(res.data.length  > 0 ){
      this.isCategoryThreeEmpty = false
    }
  })
   */


  this.Category3 = [{
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  }, {
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  } , {
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  } , 
  {
    "id": "0",
    "squarefeet": "60",
    "adress": "Republike Srpske 1",
    "mainImage": "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg"
  }]
  
}



constructor(private categories:AdsServiceService){
}
ngOnInit() {  
this.setCategoryOne()
this.setCategoryTwo() 
this.setCategoryThree()
}

}
