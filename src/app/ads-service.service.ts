import { Injectable } from '@angular/core';
import axios from 'axios';
import { Ad } from './ad';
@Injectable({
  providedIn: 'root'
})
export class AdsServiceService { 
    config = {
    headers: { Authorization: `Bearer  Tviko1998Trebinje` }
};
 
  constructor() {   
  }
}
