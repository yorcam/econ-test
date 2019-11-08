import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  title = 'Heros';
  search = '';
  heros: {};
  constructor(protected herosService:HerosService) { }

  ngOnInit() {
    this.herosService.getHeros()
    .subscribe(
      (data) => {
        this.heros = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
