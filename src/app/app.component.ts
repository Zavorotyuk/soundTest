import { Component } from '@angular/core';
import { DataService } from './data.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private config: object = {
    token: 'Q54HecQsdchtw3QvtsaFdBWQyYY3ehZD',
    clientSecret: 'CCN5RVw5sYHdGVf6sh8X9WFUBb8j45rW',
    clientId: 'g4PaKPJKaHMraXfd7a'
  }

  private cloudcasts = [];

  constructor(private _data: DataService, public sanitizer:DomSanitizer) {}

  ngOnInit() {
    this.getCloudcasts();
  }

  getCloudcasts() {
    this._data.getCloudcasts().subscribe(
      data => this.cloudcasts = data.data,
      err => console.log('err get cloudcasts', err)
    );
  };

  getFrameUrl(key) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com${key};hide_cover=1&amp;light=1`);
  }

}
