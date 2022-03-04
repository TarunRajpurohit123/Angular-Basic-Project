import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor() { }
  
}
