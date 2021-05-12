import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ngAuthSettings } from 'src/app/common/WebConfig.Product';

import { MembershipService } from '../../service/membershipService.service';
import { LogoComponent } from '../logo/logo.component';
import { LanguageService } from './../../common/Language/language.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss'],
})

export class TopmenuComponent implements OnInit {
  @ViewChild('menuLogo')
  menuLogo: LogoComponent;

  constructor(
    private router: Router,
    private location: Location,
    private membershipService: MembershipService,
    public languageService: LanguageService,
  ) {
    this.dataSource.routerURL = this.location.path(false);
    this.CheckLoginStatus();

    if (localStorage.getItem('LanguageRead')) {
      this.dataSource.selLanguage = localStorage.getItem('LanguageRead');
    }
  }

  currentLotteryTimer: any = 0;
  // elem: any = {};

  dataSource = {
    isLoginNow: false,
    isShowPwd: false,
    isShowMemberFn: true,
    isShowHamburg: false,
    thirdPartyUrl: '',
    currentLotteryTimer: {},
    routerURL: '',
    lobbyClass: '',
    UserInfo: { MemberID: 0 },
    modalMsg: {
      resCode: '000',
      title: '',
      msg: '',
      appDownloadUrl: ngAuthSettings.appDownloadUrl,
      isAppDownload: false,
      callback: '',
    },
    callBackData: {},
    menuList: [
      {
        Text: 'Home',
        LangKey: 'Home',
        URL: 'home',
        IsEnable: true,
        LotteryTypeID: 0,
      },
      {
        Text: 'Home_Lobby',
        LangKey: 'Home_Lobby',
        URL: 'lobby',
        IsEnable: true,
        LotteryTypeID: 0
      },
      // 暫時移除
      // {
      //   Text: 'Home_Promotion',
      //   LangKey: 'Home_Promotion',
      //   URL: 'promotion',
      //   IsEnable: true,
      //   LotteryTypeID: 0,
      // },
      {
        Text: 'Home_Transaction',
        LangKey: 'Home_Transaction',
        URL: 'transaction/DepositeView',
        IsEnable: true,
        LotteryTypeID: 0
      },
      {
        Text: 'Home_Wallet',
        LangKey: 'Home_Wallet',
        URL: 'transferWallet',
        IsEnable: true,
        LotteryTypeID: 0
      },
      {
        Text: 'Home_BetHistory',
        LangKey: 'Home_BetHistory',
        URL: 'betHistory',
        Class: 'fas fa-search-dollar',
        IsEnable: true,
      },
      {
        Text: 'Home_Profile',
        LangKey: 'Home_Profile',
        URL: 'memberCenter',
        Class: 'fas fa-user',
        IsEnable: true,
      },
    ],
    SubMenuList: [

    ],
    loginStatu: {
      login: true,
      register: false,
    },
    registerDataObj: {
      UserName: '',
      Pwd: '',
      ConfirmPwd: '',
      MoneyPwd: '',
      NickName: '',
      FullName: '',
      EMail: 'front@qq.com',
      Phone: '',
      Birthday: '',
      ValidatorCode: '',
      WalletIsLock: false,
      UserType: 10,
      IsMultiLogin: false,
      Status: true,
      ReferralMap: '',
      InputCode: '',
    },
    registerErrorMsg: {
      ConfirmPwd: '',
      EMail: '',
    },
    userDataObj: {
      UserName: '',
      Pwd: '',
      PlateForm: '',
      IsMandatory: false,
      InputCode: '',
      ValidatorCode: '',
    },
    userinfo: {
      UserName: '',
      NickName: '',
      TotalBalance: 0,
      Balance: 0
    },
    angpaoMoney: 0,
    validObj: {
      ValidatorCode: '',
      ValidatorCodeImg: '',
    },
    selLanguage: 'en',
  };

  ngOnInit() {

    this.currentLotteryTimer = setInterval(() => {
      this.GetBalance();
    }, 5000);
  }

  // 無API
  // 確認登入狀態
  // tslint:disable-next-line: typedef
  CheckLoginStatus() {
    const userInfoCheck = JSON.parse(localStorage.getItem('UserInfo'));
    this.dataSource.isLoginNow =
      userInfoCheck && userInfoCheck.UserName ? true : false;

    if (this.dataSource.isLoginNow) {
      this.dataSource.userinfo = JSON.parse(localStorage.getItem('UserInfo'));
      document.body.id = 'gyroContain';
      this.dataSource.lobbyClass = 'lobbyUsed';
    }
    else {
      if (this.dataSource.routerURL && this.dataSource.routerURL.indexOf('Home') < 0) {
        this.dataSource.userinfo = {
          UserName: '',
          NickName: '',
          TotalBalance: 0,
          Balance: 0
        };

        document.body.id = '';
        this.dataSource.lobbyClass = '';
        location.href = './Home';
        // this.router.navigate(['Home']);
      }
    }
  }

  //Child模板事件發生時，會呼叫此方法回傳值
  onListenMsgBox($event: any) {
    if (this.dataSource.modalMsg.resCode === '210') {
      this.dataSource.userDataObj.IsMandatory = $event.IsMandatory;
    }
  }

  // 有API
  GetBalance() {
    if (localStorage.getItem('UserName')) {
      this.membershipService.GetTotalBalance({}).subscribe(
        (response) => {
          if (response.APIRes.ResCode === '000') {
            this.dataSource.userinfo = JSON.parse(
              localStorage.getItem('UserInfo')
            );
            this.dataSource.userinfo.TotalBalance = response.Rows.TotalBalance;
            localStorage.setItem(
              'UserInfo',
              JSON.stringify(this.dataSource.userinfo)
            );
          } else {
            localStorage.removeItem('UserToken');
            localStorage.removeItem('UserInfo');
            localStorage.removeItem('UserName');
            localStorage.removeItem('PlayToken');
            localStorage.removeItem('CBank');
            this.CheckLoginStatus();
            this.dataSource.modalMsg.title = 'Login';
            this.dataSource.modalMsg.msg = response.APIRes.ResMessage;
            this.dataSource.modalMsg.callback = 'Relogin';
            $('#ModalShow').click();
            location.href = './Home';
            // this.router.navigate(['Home']);
            console.log(response.APIRes);
          }
        },
        (error) => {
          console.log('Error happened' + error);
        }
      );
    }
  }
}
