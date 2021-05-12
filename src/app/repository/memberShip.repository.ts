import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebConfig } from './../common/WebConfig.Product';

@Injectable({ providedIn: 'root' })
export class MembershipRepository {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'text/json',
  });

  options = {
    headers: this.headers,
  };

  // tslint:disable-next-line: typedef
  public Login(ajaxData) {
    const url = WebConfig.serviceBase + ajaxData.ApiPath;
    return this.http.post<any>(url, ajaxData, this.options);
  }

  // tslint:disable-next-line: typedef
  public Logout(ajaxData) {
    this.headers = new HttpHeaders({
      'Content-Type': 'text/json',
      UserName: localStorage.getItem('UserName'),
    });
    this.options = {
      headers: this.headers,
    };
    const url = WebConfig.serviceBase + ajaxData.ApiPath;
    return this.http.post<any>(url, ajaxData, this.options);
  }
}
