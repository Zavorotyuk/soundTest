import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  private baseUrl: string = 'https://api.mixcloud.com';

  constructor(
    private _http: Http) { }

  getCloudcasts(): Observable<any> {
    return this._http.get(`${this.baseUrl}/dmitriy-andreev2/cloudcasts/`)
    .map(res => res.json());
  }





}
