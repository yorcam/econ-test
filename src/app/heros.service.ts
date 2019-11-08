import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(protected http: HttpClient) { }

  getHeros(){
    return this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json');
  }
  hetHeroDetails(id){
    return this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/'+id+'.json');
  }
}
