'use strict';
// 此為本機環境設制

export const WebConfig = {
  // tslint:disable-next-line: max-line-length
  // serviceBase: 'http://www.mars999.net/Mars.API/', //'http://www.parkdragon.net/Mars.API/', // 'http://www.hkgplottery.com', // 'http://192.82.60.55/GHL.API/';'../GHL.API/';'http://www.hkgplottery.com';
  serviceBase: 'http://localhostMars.API/', //'http://www.parkdragon.net/Mars.API/', // 'http://www.hkgplottery.com', // 'http://192.82.60.55/GHL.API/';'../GHL.API/';'http://www.hkgplottery.com';
  // tslint:disable-next-line: max-line-length
  serviceOffical: '../Office.API/', // https://office-api.hkgplottery.com:8300/Office.API/';'http://192.82.60.31:8300/Office.API/';'http://hkgplottery.com:8300/Office.API/';'http://192.82.60.55:8300/Office.API/';
  thirdPartyServer: 'http://pp.hkgpgaming.asia:8300', // 'https://pp.hkgpgaming.asia:8300';
  streamServer: 'http://' + location.host + '/', // 'http://localhost/', //'http://' + location.host + '/',
  streamObs: 'https://cdn-live.hkgplottery.com/live/',
  signalRServer: 'http://192.82.60.31:8001/signalr',
  apip: 'CopyRight.GoldenHippo@20191010',
  jsVersion: '20200803.1',
  // 系統共用參數
  config_CompanyID: '2',
  config_AgentParentMap: 'Admin/SMTest/MTest/AGTest',
  config_AgentParentID: 10,
  config_AgentLevelSCID: 32,
  config_ReferralPayType: 34,
  webDebug: false,
};

// version
export const jsVersion = '20200803.1';

export const ngAuthSettings = Object.freeze({
  appDownloadUrl: {
    kiss918: 'http://cdn.newplay66.com/m.html',
    mars999_Android: 'http://cdnsec.7stars.asia/APP/Android/mars999.apk',
    mars999_IOS: null,
  },
  apip: 'Test',
  apiServiceBaseUri: WebConfig.serviceBase,
  apiServiceOfficalUri: WebConfig.serviceOffical,
  // tslint:disable-next-line: object-literal-shorthand
  thirdPartyServer: WebConfig.thirdPartyServer,
  egretPlayer: [
    {
      sicbo:
        $(window).width() > 991
          ? 'https://' + location.host + '/GHLSicboWeb/'
          : 'https://' + location.host + '/GHLSicboPhone/',
      lottery2D:
        $(window).width() > 991
          ? 'https://' + location.host + '/GHL.2D36Web/'
          : 'https://' + location.host + '/GHL.2D36Phone/',
    },
  ],
  clientId: 'ngAuthApp',
  language: 'zh-TW',
  menuShow: 'false',
  topBarShow: 'false',
  leftBarShow: 'false',
  headers: {},
  LotteryClass: {},
  isLogin: {
    Text: 'Login',
    Status: false,
  },
  userDataObj: {
    UserName: '',
    Pwd: '',
    ValidatorCode: '',
  },
  modalMsg: {
    title: '標題',
    msg: '',
    clickValue: false,
    callBack: 'home',
    type: '',
  },
  fileinde: {},
  userInfo: {},
  slideLottery: {},
  ChipsArray: [
    {
      myValues: 10,
      class: 'circle-number1 GHL-Chips-font',
      src: './content/img/game4dchips/green.png',
      selected: true,
    },
    {
      myValues: 50,
      class: 'circle-number1 GHL-Chips-font',
      src: './content/img/game4dchips/pink.png',
      selected: false,
    },
    {
      myValues: 100,
      class: 'circle-number1 GHL-Chips-font',
      src: './content/img/game4dchips/red.png',
      selected: false,
    },
    {
      myValues: 500,
      class: 'circle-number1 GHL-Chips-font',
      src: './content/img/game4dchips/purple.png',
      selected: false,
    },
    {
      myValues: 1000,
      class: 'circle-number1 GHL-Chips-font',
      src: './content/img/game4dchips/yellow.png',
      selected: false,
    },
  ],
  PlayBallStyle: {
    GPRacing: [
      {
        Class: 'bg-orange',
        ImgName: './content/img/PlayImg/car/golbal/01.png',
        ImgText: '01',
      },
      {
        Class: 'bg-navy',
        ImgName: './content/img/PlayImg/car/golbal/02.png',
        ImgText: '02',
      },
      {
        Class: 'bg-red',
        ImgName: './content/img/PlayImg/car/golbal/03.png',
        ImgText: '03',
      },
      {
        Class: 'bg-green',
        ImgName: './content/img/PlayImg/car/golbal/04.png',
        ImgText: '04',
      },
      {
        Class: 'bg-gray',
        ImgName: './content/img/PlayImg/car/golbal/05.png',
        ImgText: '05',
      },
      {
        Class: 'bg-fuchsia',
        ImgName: './content/img/PlayImg/car/golbal/06.png',
        ImgText: '06',
      },
      {
        Class: 'bg-aqua',
        ImgName: './content/img/PlayImg/car/golbal/07.png',
        ImgText: '07',
      },
      {
        Class: 'bg-yellow',
        ImgName: './content/img/PlayImg/car/golbal/08.png',
        ImgText: '08',
      },
      {
        Class: 'bg-purple',
        ImgName: './content/img/PlayImg/car/golbal/09.png',
        ImgText: '09',
      },
      {
        Class: 'bg-olive',
        ImgName: './content/img/PlayImg/car/golbal/10.png',
        ImgText: '10',
      },
    ],
    FlashSicbo: {
      white: [
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/white01.svg',
          ImgText: '01',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/white02.svg',
          ImgText: '02',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/white03.svg',
          ImgText: '03',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/white04.svg',
          ImgText: '04',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/white05.svg',
          ImgText: '05',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/white06.svg',
          ImgText: '06',
        },
      ],
      blue: [
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/blue01.svg',
          ImgText: '01',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/blue02.svg',
          ImgText: '02',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/blue03.svg',
          ImgText: '03',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/blue04.svg',
          ImgText: '04',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/blue05.svg',
          ImgText: '05',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/blue06.svg',
          ImgText: '06',
        },
      ],
      red: [
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/red01.svg',
          ImgText: '01',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/red02.svg',
          ImgText: '02',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/red03.svg',
          ImgText: '03',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/red04.svg',
          ImgText: '04',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/red05.svg',
          ImgText: '05',
        },
        {
          Class: '',
          ImgName: './content/img/PlayImg/dice/golbal/red06.svg',
          ImgText: '06',
        },
      ],
    },
    TwoD75: [
      {
        Class: 'color_ball_s red_ball text-white',
        ImgName: '',
        ImgText: 'redball',
      },
      {
        Class: 'color_ball_s green_ball text-white',
        ImgName: '',
        ImgText: 'greenball',
      },
      {
        Class: 'color_ball_s blue_ball text-white',
        ImgName: '',
        ImgText: 'blueball',
      },
    ],
  },
  // 推播使用
  // tslint:disable-next-line: typedef
  signalRClient() {},
  OLotteryData: [
    { LotteryTypeID: 1, OLottery: [] },
    { LotteryTypeID: 2, OLottery: [] },
    { LotteryTypeID: 4, OLottery: [] },
    { LotteryTypeID: 5, OLottery: [] },
    { LotteryTypeID: 7, OLottery: [] },
    { LotteryTypeID: 10, OLottery: [] },
    { LotteryTypeID: 11, OLottery: [] },
    { LotteryTypeID: 12, OLottery: [] },
    { LotteryTypeID: 14, OLottery: [] },
    { LotteryTypeID: 16, OLottery: [] },
  ],
});
