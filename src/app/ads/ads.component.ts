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



 
  isCategoryThreeEmpty():boolean{
    if(this.Category3.length == 0 ){
      
    return true
    }else{
      return false
    }
  }



setCategoryOne() {
  axios.get('http://localhost:1234/listByCategory.php?id=1').then((res) => {
    this.Category1 = res.data
    console.log(res.data)
  })
}


setCategoryTwo() {
  axios.get('http://localhost:1234/listByCategory.php?id=2').then((res) => {
    this.Category2 = res.data
  })
}
setCategoryThree() {
  axios.get('http://localhost:1234/listByCategory.php?id=3').then((res) => {
    this.Category3 = res.data
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
