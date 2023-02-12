import { Component } from '@angular/core';
import axios from 'axios';
import { Ad } from '../ad';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
 
Category1  = [{"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "}, {"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "} , {"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "}, {"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "}]
Category2 = [{"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "}, {"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "} , {"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "}, {"squarefeet":'50',"id":1,"adress":"test","mainImage":"https://via.placeholder.com/300.png/09f/fff "}]

constructor(){
  
}
ngOnInit() { 
}

}
