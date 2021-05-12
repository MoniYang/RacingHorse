import { Location, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { LanguageService } from './common/Language/language.service';
import { ngAuthSettings } from './common/WebConfig.Product';
import { SignalRHelperService } from './service/helper/SignalRHelper.service';
import { UtilsService } from './service/helper/UtilsService.service';
import { MembershipService } from './service/membershipService.service';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// 套件區
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'Mars999-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  faCoffee = faCoffee;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private membershipService: MembershipService,
    private localStorage: LocalStorage,
    private scroller: ViewportScroller,
    private utilsService: UtilsService,
    private signalRHelper: SignalRHelperService,
    public languageService: LanguageService
  ) { }
  title = 'Mars999';

  signalRHelperService = this.signalRHelper;
  currentLotteryTimer: any = 0;
  elem: any = {};

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
    isLock: false,
    routerURL: '',
    modalMsg: {
      resCode: '000',
      title: '',
      msg: '',
      downloadKey: '',
      appDownloadUrl: ngAuthSettings.appDownloadUrl,
      isAppDownload: false,
      callback: '',
    },
    livechatOpen: false,
    downloadAppOpen: false,
    appDownloadUrl: ngAuthSettings.appDownloadUrl,
  };

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.signalRHelperService.Connection();

    this.dataSource.userBrowser = this.utilsService.BrowserGet();
    this.checkOS();

    this.currentLotteryTimer = setInterval(() => {
      this.dataSource.routerURL = this.location.path(false);
      // if (this.dataSource.routerURL.indexOf('lobby') >= 0) {
      //   //this.lockScreen();
      //   if (document.body.id != 'gyroContain') {
      //     document.body.id = 'gyroContain';
      //   }
      // } else {
      //   //this.unlock();
      //   document.body.id = '';
      // }
    }, 1000);
  }

  // 無API
  /**
   * livechatOpenEvent
   */
  // tslint:disable-next-line: typedef
  livechatOpenEvent() {
    this.dataSource.livechatOpen = !this.dataSource.livechatOpen;
  }
  /**
   * livechatOpenEvent
   */
  // tslint:disable-next-line: typedef
  downloadAppOpenEvent() {
    this.dataSource.downloadAppOpen = !this.dataSource.downloadAppOpen;
  }

  // tslint:disable-next-line: typedef
  openAppDownloadModal(downloadKey) {
    this.dataSource.modalMsg.title = this.languageService.Language['Home_Mars999']; // 'Default UserInfo';
    this.dataSource.modalMsg.msg = downloadKey + ' App Download';
    this.dataSource.modalMsg.isAppDownload = true;
    this.dataSource.modalMsg.downloadKey = downloadKey;
  }

  // tslint:disable-next-line: typedef
  ChangeLoginStyle() { }

  getOppositeOrientation() {
    const { type } = screen.orientation;
    return type.startsWith('portrait') ? 'landscape' : 'portrait';
  }

  lockScreen() {
    //console.log(screen.orientation);
    if (!this.dataSource.isLock) {
      const newOrientation = this.getOppositeOrientation();
      window.screen.orientation.lock('portrait');
      //screen.orientation.lock(newOrientation);
      this.dataSource.isLock = true;
    }
  }

  async unlock() {
    await screen.orientation.unlock();
  }

  checkOS() {
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

  UnityOpen(str) {
    let url = 'uniwebview://openurl?' + str;
    let checkUnityApp = this.localStorage.getItem('IsUnityApp').toString();
    // console.log(url);
    if (checkUnityApp.toLowerCase() === 'true') {
      window.open(url,
        '_blank',
        'location=no,fullscreen=yes,toolbar=yes,scrollbars=yes,resizable=yes,height=720,width=1080');
    }
  }

  openDownload(downlinkURL) {
    window.open(downlinkURL,
      '_blank',
      'location=no,fullscreen=yes,toolbar=yes,scrollbars=yes,resizable=yes,height=720,width=1080');
  }

  // 判斷Header 是否在Top
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }
}
