import { Injectable } from '@angular/core';

import * as enUS from './languagePackage/en-US.json';
import * as zhCN from './languagePackage/zh-CN.json';
import * as zhTW from './languagePackage/zh-TW.json';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {
  }

  public Language = {};

  LanguageRead = {
    zhtw: zhTW.zhtw,
    zhcn: zhCN.zhcn,
    en: enUS.en,
  };

  SetJson(selectLanguage) {
    this.Language = this.LanguageRead[selectLanguage];
    localStorage.setItem('LanguageRead', selectLanguage);
  }
}
