import { Movie } from './movie';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of, shareReplay } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  static getFoodById(arg0: any): Movie {
    throw new Error('Method not implemented.');
  }
  private baseUrl = "https://imdb-api.com/en/API/Top250Movies/k_na8tgfy8";
  

  constructor( private http:HttpClient,private httpid:HttpClient){
    
  }
 

  /*getusertList(){
    return this.http.get(this.baseUrl);
  }*/
  getusertList():Observable<any> {
    //return this.http.get(this.baseUrl);
    return this.http.get<any>(this.baseUrl);

  }
 

}
  