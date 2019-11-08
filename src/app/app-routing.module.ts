import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerosComponent } from './heros/heros.component';
import { RandomHerosComponent } from './random-heros/random-heros.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'hero/:id', component: HeroDetailComponent },
  {path: 'heros', component: HerosComponent},
  {path: 'random-heros', component: RandomHerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
