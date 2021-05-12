import { Location } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilsService } from './../../service/helper/UtilsService.service';
import { LotteryService } from './../../service/Lottery.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
// 宣告取得視窗大小的物件
@HostListener('window:resize', ['$event'])
export class LobbyComponent implements OnInit {
  // DomSanitizer取得Browser的大小
  constructor(
    private router: Router,
    private location: Location,
    private utilsService: UtilsService,
    private lotteryService: LotteryService,
    private elementRef: ElementRef
  ) {
    this.SetURL();
    this.FindLotteryClassLobby();
  }
  currentLotteryTimer: any = 0;

  dataSource = {
    nowScreenWidth: 0,
    oldScreenWidth: 0,
    nowLobbyURL: '',
    routerURL: '',
    lobbyClass: '',
    isTransform: false,
    isShowVideo: false,
    nowVideoURL: '',
    currentLotteryTimer: {},
    modalMsg: {
      title: 'Login',
      msg: 'Please Login!',
    },
    LotteryInfo: {
      LotteryTypeCode: 1,
      Status: true,
    },
    LotterySearchObj: {
      LotteryTypeCode: 1,
      Status: true,
      LotteryType_TableID: 1,
    },
    PagerObj: {
      CurrentPage: 1,
      PageSize: 1000,
      TotalItems: 0,
      PageArray: [1, 2, 3, 4, 5, 6, 7, 8],
      thisPage: 1,
    },
    userBrowser: {
      init: function () { },
      OS: '',
      UserAgent: '',
      browser: '',
      version: '',
      versionSearchString: '',
      isMobile: false,
    },
  };
  routerSubscription: any;

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // $('#temp-show-width').html('innerWidth:' + window.innerWidth + '<br>innerHeight:' + window.innerHeight);
    setTimeout(() => {
      this.CheckLogin();
    }, 1500);

    this.dataSource.routerURL = this.location.path(false);
    this.dataSource.userBrowser = this.utilsService.BrowserGet();
    this.dataSource.userBrowser.init();

    if (this.dataSource.routerURL.indexOf('lobby') >= 0) {
      this.dataSource.lobbyClass = 'lobbyUsed';
    } else {
      this.dataSource.lobbyClass = '';
    }

    this.currentLotteryTimer = setInterval(() => {
      this.CheckRouletteShow();
    }, 1000);
  }

  // API方法
  FindLotteryClassLobby() {
    const ajaxData = {};
    ajaxData['CurrentPage'] = this.dataSource.PagerObj.CurrentPage;
    ajaxData['PageSize'] = this.dataSource.PagerObj.PageSize;
    ajaxData['LotteryTypeCode'] = this.dataSource.LotterySearchObj.LotteryTypeCode;
    ajaxData['Status'] = this.dataSource.LotterySearchObj.Status;
    ajaxData['LotteryType_TableID'] = this.dataSource.LotterySearchObj.LotteryType_TableID;

    this.lotteryService.FindLotteryClassLobby(ajaxData).subscribe(
      (response) => {
        if (response.APIRes.ResCode === '000') {
          this.dataSource.PagerObj = response.Rows.PagerObj;
          if (response.PlayToken) {
            localStorage.setItem('PlayToken', response.PlayToken);
          }
          if (response.Rows.ListData && response.Rows.ListData.length) {
            localStorage.setItem(
              'LotteryClass',
              JSON.stringify(response.Rows.ListData)
            );
          }
        }
      },
      (error) => {
        console.log('Error happened' + error);
      }
    );
  }

  // 沒有使用API的方法
  CheckLogin() {
    if (!localStorage.getItem('UserName')) {
      // this.dataSource.modalMsg.title = 'Login';
      // this.dataSource.modalMsg.msg = 'Please Login!';
      // $('#ModalShow').click();
      location.href = './Home';
      // this.router.navigate(['Home']);
      return;
    }
    else if (localStorage.getItem('BackToLobby').toLowerCase() === 'true') {
      console.log('CheckLogin ==>', localStorage.getItem('BackToLobby').toLowerCase());
      // this.dataSource.modalMsg.title = 'Login';
      // this.dataSource.modalMsg.msg = 'Please Login!';
      // $('#ModalShow').click();
      localStorage.removeItem('BackToLobby');
      location.href = './Home';
      return;
    }
  }

  // tslint:disable-next-line: typedef
  Transform(url) {
    // tslint:disable-next-line: triple-equals
    return this.utilsService.transform(url);
  }

  // tslint:disable-next-line: typedef
  SetURL() {
    this.dataSource.oldScreenWidth = window.innerWidth;
    // this.dataSource.nowLobbyURL = 'http://localhost/'; // local;
    // this.dataSource.nowLobbyURL = 'http://www.parkdragon.net/'; // UAT;
    this.dataSource.nowLobbyURL = 'http://www.mars999s.com/'; // UAT;
    // this.dataSource.nowLobbyURL = 'http://www.mars999.net/'; // LIVE;
    if (this.dataSource.nowScreenWidth > 991) {
      this.dataSource.nowLobbyURL += 'PDW.Game/';
    } else {
      this.dataSource.nowLobbyURL += 'PDM.Game/';
    }
  }

  // tslint:disable-next-line: typedef
  OnResize() {
    // $('#temp-show-width').html('innerWidth:' + window.innerWidth + '<br>innerHeight:' + window.innerHeight);
    this.dataSource.nowScreenWidth = window.innerWidth;

    if (this.dataSource.nowScreenWidth != this.dataSource.oldScreenWidth) {
      this.SetURL();
    }
  }

  CheckRouletteShow() {
    let fileName = localStorage.getItem('RouletteFileName');
    let gameType = localStorage.getItem('EnteredGameType');
    if (fileName && gameType == '3') {
      this.dataSource.isShowVideo = true;
      this.dataSource.nowVideoURL =
        'http://cdnsec.7stars.asia/video/Roulette/' + fileName; //https://cdn.7stars.asia/video/Roulette/Roulette_0_1.mp4
      localStorage.removeItem('RouletteFileName');

      if (localStorage.getItem('IsShowVideo')) {
        this.ChangeShowVideo();
      }
    }
    // console.log('RouletteFileName ==>', this.dataSource.nowVideoURL);
  }

  ChangeShowVideo() {
    let isShowVideo = localStorage.getItem('IsShowVideo');

    if (isShowVideo.toUpperCase() == 'TRUE') {
      this.dataSource.isShowVideo = !Boolean(isShowVideo);
    } else {
      setTimeout(() => {
        this.dataSource.isShowVideo = false;
      }, 15 * 1000);
    }
    console.log('RouletteFileName ==>', isShowVideo);
    localStorage.removeItem('IsShowVideo');
  }

  SetTimeoutClear() {
    if (this.dataSource.currentLotteryTimer) {
      clearInterval(this.currentLotteryTimer);
    }
  }
}
