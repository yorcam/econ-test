import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service'

@Component({
  selector: 'app-random-heros',
  templateUrl: './random-heros.component.html',
  styleUrls: ['./random-heros.component.css']
})
export class RandomHerosComponent implements OnInit {
  heros = [] as any;
  herosId = [] as any;
  numberHeros = 20;
  constructor(protected herosService:HerosService) { 
    this.herosService.getHeros()
    .subscribe(
      (data) => {
        Object.keys(data).forEach((key) => {this.herosId.push(data[key].id);})
      },
      (error) => {console.error(error);}
    )
   }
  ngOnInit() {
    for (var index = 0; index < this.numberHeros; index++) {
      let ran = Math.floor(Math.random() * 562 + 1);
      this.herosService.hetHeroDetails(ran)
      .subscribe(
        (data) => {this.heros.push(data)},
        (error) => {this.numberHeros++}
      )
      console.log(index)
    }
  }
}