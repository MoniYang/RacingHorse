import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { LanguageService } from 'src/app/common/Language/language.service';
import { ngAuthSettings } from 'src/app/common/WebConfig.Product';

@Component({
  selector: 'app-TopMenuMessageBox',
  templateUrl: './TopMenuMessageBox.component.html',
  styleUrls: ['./TopMenuMessageBox.component.css']
})
export class TopMenuMessageBoxComponent implements OnInit {
  constructor(
    public languageService: LanguageService) { }
  @Input() modalMsg = {
    title: 'Login',
    msg: 'Please Login!',
    resCode: '',
    isAppDownload: false,
    appDownloadUrl: ngAuthSettings.appDownloadUrl,
    callback: '',
  }; // 傳進來的參數
  @Output() callBackEvent = new EventEmitter<any>(); //提供Output裝飾器，讓該事件成為父親模板的事件

  dataSource = {
    callBackData: { IsMandatory: false },
  };

  ngOnInit() { }

  //Child模板事件發生時，會呼叫此方法回傳值
  CallBack() {
    if (this.modalMsg.resCode === '210') {
      this.dataSource.callBackData.IsMandatory = true;
      this.callBackEvent.emit(this.dataSource.callBackData);
    }
  }

  // 原本是傳 陣列，後面 radio button 只有 string
  // previousValue: any - 上次的值 (第一次會是 undefined)
  // currentValue: any - 現在的值
  // firstChange: boolean - 是不是第一次
  ngOnChanges(changes: SimpleChanges): void {
    const current = changes.modalMsg as SimpleChange;
    console.log(changes.modalMsg);
    //const isArray = Array.isArray(current);
    //const beArray = isArray ? current : [current];
  }

}
