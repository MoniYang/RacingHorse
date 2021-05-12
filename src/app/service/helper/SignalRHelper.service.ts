import { Injectable } from '@angular/core';

import * as signalR from '../../../content/scripts/jquery.signalR/SignalRHelper.js';
import { UtilsService } from './UtilsService.service';

declare const SignalRHelper: any;

@Injectable({
  providedIn: 'root',
})
export class SignalRHelperService {
  constructor(private utilsService: UtilsService) { }

  connection = signalR;
  signalRHelper: any = SignalRHelper();

  signalRHubProxy;

  Connection() {
    this.Init();
    this.signalRHelper.Connection();
  }

  JoinRoom() {
    const room = JSON.parse(localStorage.getItem('WebLocatingHelper'));
    this.signalRHelper.roomID = room.RoomID;
    this.signalRHelper.JoinGroup();
  }

  ReceiveMsg() {
    try {
      let msg = this.signalRHelper.GetReceiveMsg();
      if (msg) {
        // console.log('GetReceiveMsg==>', msg);
      }
    }
    catch (ex) {

    }
  }

  SendMsg(msg) {
    this.signalRHelper.SendMsg(msg);
  }

  Init() {
    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    if (userInfo === null || userInfo === undefined) {
      // this.signalRHelper.signalRUrl = 'http://www.parkdragon.net:8001/signalr'; //'http://127.0.0.1:8003/signalr'; //'http://www.parkdragon.net:8001/signalr';
      this.signalRHelper.signalRUrl = 'http://www.mars999s.com:8001/signalr'; //'http://127.0.0.1:8003/signalr'; //'http://www.parkdragon.net:8001/signalr';
      // this.signalRHelper.signalRUrl = 'http://www.mars999.net:8001/signalr'; //'http://127.0.0.1:8003/signalr'; //'http://www.parkdragon.net:8001/signalr';
      this.signalRHelper.userName = 'NotLogin';
    }
    else {
      // this.signalRHelper.signalRUrl = 'http://www.parkdragon.net:8001/signalr'; //'http://127.0.0.1:8003/signalr'; //'http://www.parkdragon.net:8001/signalr';
      this.signalRHelper.signalRUrl = 'http://www.mars999s.com:8001/signalr'; //'http://127.0.0.1:8003/signalr'; //'http://www.parkdragon.net:8001/signalr';
      // this.signalRHelper.signalRUrl = 'http://www.mars999.net:8001/signalr'; //'http://127.0.0.1:8003/signalr'; //'http://www.parkdragon.net:8001/signalr';
      this.signalRHelper.userName = userInfo.UserName;
    }
  }
}
