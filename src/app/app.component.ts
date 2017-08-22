import { Component } from '@angular/core';
import { DataService } from './data.service';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private cloudcasts = [];
  private soundcloudcasts = [];
  private user = null;

  constructor(private _data: DataService, public sanitizer:DomSanitizer) {}

  ngOnInit() {
    this.getCloudcasts();
    this.getSoundCloudcasts();
    this.getUserInfo();
  }

  getCloudcasts() {
    this._data.getCloudcasts().subscribe(
      data => this.cloudcasts = data.data,
      err => console.log('err get cloudcasts', err)
    );
  };

  getMiCloudFrameUrl(key) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com${key};hide_cover=1&amp;light=1`);
  };

  getSoundCloudcasts() {
    this._data.getSoundCloudcasts().subscribe(
      data => this.soundcloudcasts = data,
      err => console.log('err soundcloud', err)
    );
  };

  getSoundCloudcastsFrameUrl(key) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${key}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`);

  }

  getUserInfo() {
    this._data.getUserInfo().subscribe(
      data => this.user = data,
      err => console.log('err getting user', err)
    )
  }

}
