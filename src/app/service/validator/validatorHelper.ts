import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class validatorHelper {
  constructor() {}
  IsEmptyValue(data) {
    if (data === null || $.trim(data) === '') {
      return true;
    }
    return false;
  }

  IsEmail(data) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(data);
  }

  IsPassWord(data) {
    const engReg = /[^a-z^A-Z]/g;
    const numReg = /[^0-9]/g;

    return engReg.test(data) && numReg.test(data);
  }

  IsDouble(data) {
    const reg = new RegExp('^[0-9]+([.][0-9]+)?$');
    return reg.test(data);
  }

  IsMoblie(data) {
    const reg = new RegExp(/^(09([0-9]){8})$/);
    return reg.test(data);
  }

  IsTel(data) {
    const reg = new RegExp(/^(([0-9]){2,3}\-[0-9]{5,8})$/);
    return reg.test(data);
  }

  IsURL(data) {
    // var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    const regexp = /http:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (data.match(regexp)) {
      return true;
    } else {
      return false;
    }
  }

  IsNumeric(data) {
    const reg = /[^0-9]/g;
    return !reg.test(data);
  }

  IsPercent(data) {
    const reg = /\b(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/;
    return reg.test(data);
  }

  IsDropdown(data) {
    return data !== -1;
  }

  IsTWID(id) {
    // 建立字母分數陣列(A~Z)
    const city = new Array(
      1,
      10,
      19,
      28,
      37,
      46,
      55,
      64,
      39,
      73,
      82,
      2,
      11,
      20,
      48,
      29,
      38,
      47,
      56,
      65,
      74,
      83,
      21,
      3,
      12,
      30
    );
    id = id.toUpperCase();
    // 使用「正規表達式」檢驗格式
    if (id.search(/^[A-Z](1|2)\d{8}$/i) === -1) {
      // alert('基本格式錯誤');
      return false;
    } else {
      // 將字串分割為陣列(IE必需這麼做才不會出錯)
      id = id.split('');
      // 計算總分
      let total = city[id[0].charCodeAt(0) - 65];
      for (let i = 1; i <= 8; i++) {
        total += eval(id[i]) * (9 - i);
      }
      // 補上檢查碼(最後一碼)
      total += eval(id[9]);
      // 檢查比對碼(餘數應為0);
      return total % 10 === 0;
    }
  }
}
