import { Component } from '@angular/core'; 
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  arr = ["january","february","march","april","may","june"];
  obj = {
    text:"Months",
    age:22
  }
  myfun(){
    alert("clicked");
  }
  todaydate = new Date(); 
  Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  //api

 
}

