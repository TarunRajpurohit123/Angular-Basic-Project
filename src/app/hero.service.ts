import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  countryData = null;
  constructor(private http: HttpClient) { }

  getData(){
    let url = "http://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }

}
