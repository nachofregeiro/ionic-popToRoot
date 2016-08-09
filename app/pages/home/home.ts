import {Component, OnInit} from '@angular/core';
import { NavController, Loading, LoadingController } from 'ionic-angular';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  loading: Loading;

  constructor(private _http: Http, private nav: NavController, private loadingController: LoadingController) {
  
  }

  ngOnInit() {
    // this.showLoading();

    // this._http.get('/indexxx.html')
    //   .subscribe(data => {
    //     console.log(data);
    //     this.loading.dismiss();
    //     this.nav.push(ContactPage);
    // }, error => {
    //   console.log(error);
    //   this.loading.dismiss();
    //   this.nav.push(ContactPage);
    // });
  }
  
  pushPage() {
    this.showLoading();

    this._http.get('/index.html')
      .subscribe(data => {
        console.log(data);
        this.loading.dismiss();
        this.nav.push(ContactPage);
        this.loading.dismiss();
    }, error => {
      console.log(error);
      this.loading.dismiss();
      this.nav.push(ContactPage);
    });
  }

  showLoading() {
    this.loading = this.loadingController.create({
      content: "Loading..."
    });
    this.loading.present();
  }
}
