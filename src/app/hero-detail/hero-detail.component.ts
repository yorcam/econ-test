import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: {};
  id;
  constructor(protected herosService:HerosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.herosService.hetHeroDetails(this.id)
    .subscribe(
      (data) => {
        this.hero = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
