import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { WebConfig } from '../../common/WebConfig.Product';

@Injectable({ providedIn: 'root' })
export class RepositoryHelper {
  constructor(private http: HttpClient
    , private localStorage: LocalStorage) { }

  headers = new HttpHeaders({
    'Content-Type': 'text/json',
  });

  options = {
    headers: this.headers,
  };

  // tslint:disable-next-line: typedef
  public Post(ajaxData) {
    // this.loading.start();
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': WebConfig.serviceBase,
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Max-Age': '86400',
      'Content-Type': 'text/json',
      UserName: localStorage.getItem('UserName')
        ? localStorage.getItem('UserName')
        : '',
      RegisterToken: localStorage.getItem('RegisterToken')
        ? localStorage.getItem('RegisterToken')
        : '',
      PlayToken: localStorage.getItem('PlayToken')
        ? localStorage.getItem('PlayToken')
        : '',
    });


    //this.headers.set('UserName', localStorage.getItem('UserName'));
    this.options = {
      headers: this.headers,
    };
    const url = WebConfig.serviceBase + ajaxData.ApiPath;
    return this.http.post<any>(url, ajaxData, this.options);
  }
}
