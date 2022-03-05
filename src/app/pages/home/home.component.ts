import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../hero.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;

  ngOnInit(): void {
  }

  constructor(private hero:HeroService){
    let data =  this.hero.getData().subscribe(data =>{
       this.users = data;
     })
  }

}
