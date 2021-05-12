import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/service/helper/UtilsService.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  constructor(
    private utilsService: UtilsService,
    private location: Location
  ) {
  }

  dataSource = {
    userBrowser: {
      init: function () { },
      OS: '',
      UserAgent: '',
      browser: '',
      version: '',
      versionSearchString: '',
      isMobile: false,
    },
    logo: {
      Text: '首頁',
      SubText: 'MainPage',
      URL: 'home',
      Class: 'logo',
      ImgClass: true,
      SVGNAV: [
        {
          Class: 'logo_b index_logo',
          Img: 'content/images/logo.png',
          Text: '',
        },
        {
          Class: 'logo_w index_logo',
          Img: 'content/images/logo_w.png',
          Text: '',
        },
      ],
      DropDownList: false,
    },
  };

  ngOnInit() {
    // do something...
    this.CheckURL();
    this.dataSource.userBrowser = this.utilsService.BrowserGet();
    this.CheckOS();
  }

  /*
  檢查是否在home
  */
  // tslint:disable-next-line: typedef
  CheckURL() {
    if (!this.location.path() || this.location.path().toLowerCase().includes('home')){
      this.dataSource.logo.ImgClass = true;
    } else {
      this.dataSource.logo.ImgClass = false;
    }
  }

  CheckOS() {
    this.dataSource.userBrowser.init();
    if (
      this.dataSource.userBrowser.OS.toUpperCase().indexOf('ANDROID') >= 0 ||
      this.dataSource.userBrowser.OS.toUpperCase().indexOf('IOS') >= 0 ||
      this.dataSource.userBrowser.OS.toUpperCase().indexOf('IPHONE') >= 0 ||
      this.dataSource.userBrowser.OS.toUpperCase().indexOf('IPAD') >= 0
    ) {
      this.dataSource.userBrowser.isMobile = true;
    }
  }
}
