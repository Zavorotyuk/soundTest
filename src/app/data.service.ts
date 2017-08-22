import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  private baseUrls = {
    miCloud: 'https://api.mixcloud.com',
    soundCloud: 'https://api.soundcloud.com'
  }

  constructor(
    private _http: Http) { }

  getCloudcasts(): Observable<any> {
    return this._http.get(`${this.baseUrls.miCloud}/dmitriy-andreev2/cloudcasts/`)
    .map(res => res.json());
  };

  getSoundCloudcasts(): Observable<any> {
    return this._http.get(`${this.baseUrls.soundCloud}/users/327666017/tracks?client_id=69efe52021a5d2649a8ee04165867e82`)
    .map(res => res.json());
  };

  getUserInfo(): Observable<any> {
    return this._http.get(`${this.baseUrls.miCloud}/dmitriy-andreev2/`)
    .map(res => res.json());
  }





}
