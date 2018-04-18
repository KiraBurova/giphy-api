import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

private results = new BehaviorSubject([]);

public getResults$(){
   return this.results.asObservable();
}

  constructor (private http: Http) {}
  link = 'http://api.giphy.com/v1/gifs/search?q=';
  ApiKey = environment.API_KEY;

  public getGifs(searchValue:string) {
    return this.http.get(this.link + searchValue +'&api_key='+ this.ApiKey)
    .map((res:Response) => res.json())
    .do(data => this.results.next(data.data));
 }
}
