import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare const BrowserGet: any;

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private sanitizer: DomSanitizer) {}

  userAgent: any = BrowserGet;
  dataSource = {
    oldURL: '',
  };

  transform(url): any {
    // tslint:disable-next-line: triple-equals
    if (url != this.dataSource.oldURL) {
      this.dataSource.oldURL = url;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  formatDate(date, withTime): any {
    if (!date) return;
    var options = {
      hour: '2-digit', //(e.g., 02)
      minute: '2-digit', //(e.g., 02)
      second: '2-digit', //(e.g., 02)
      hour12: false, // 24 小時制
      timeZone: 'Asia/Taipei', // 美國/紐約
    };

    var tmpTimeout = date.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Taipei',
      hour12: true,
    });
    var timeout = '';
    if (tmpTimeout.indexOf('AM')) {
      tmpTimeout = date.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Taipei',
        hour12: false,
      });
      if (parseInt(tmpTimeout.split(':')[0]) > 23) {
        timeout +=
          '00:' + tmpTimeout.split(':')[1] + ':' + tmpTimeout.split(':')[2];
      } else {
        timeout = date.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Taipei',
          hour12: false,
        });
      }
    } else {
      timeout = date.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Taipei',
        hour12: false,
      });
    }
    tmpTimeout = '';

    var strDate = date.toLocaleDateString('zh-TW', {
      timeZone: 'Asia/Taipei',
      hour12: false,
    });

    return withTime ? strDate + ' ' + timeout : strDate;
  }

  getDateS(date) {
    if (!date) return;
    const changeDate =
      date.toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' }) +
      ' 00:00:00';
    //return date.getFullYear() + '/' + (date.getMonth() + 1) + "/" + date.getDate() + ' 00:00:00';
    return changeDate;
  }

  getDateE(date) {
    if (!date) return;
    const changeDate =
      date.toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' }) +
      ' 23:59:59';
    //return date.getFullYear() + '/' + (date.getMonth() + 1) + "/" + date.getDate() + ' 00:00:00';
    return changeDate;
  }

  calculatorPageObj(pageObj) {
    let thisPagerObj = {
      CurrentPage: 1,
      PageSize: 100,
      PageSizeArray: [1, 5, 10, 20],
      TotalItems: 0,
      TotalPage: 0,
      PageArray: [],
      PageRangeMax: 10,
      PageRangeMin: 1,
      thisPage: 1,
    };
    thisPagerObj = $.extend({}, true, pageObj);

    // 要有筆數才進行計算頁次
    if (thisPagerObj.TotalItems > 0) {
      let totalPage = Math.ceil(
        thisPagerObj.TotalItems / thisPagerObj.PageSize
      );
      thisPagerObj.TotalPage = totalPage;
      thisPagerObj.PageArray = [];

      //計算PageArray
      for (var i = 0; i < totalPage; i++) {
        thisPagerObj.PageArray.push(i + 1);
      }

      // 若只有一頁，則將CurrentPage設為1
      if (
        thisPagerObj.CurrentPage >
        thisPagerObj.PageArray[thisPagerObj.PageArray.length - 1]
      ) {
        thisPagerObj.CurrentPage = 1;
        thisPagerObj.thisPage = 1;
      }

      // 每次要顯示的頁碼
      if (thisPagerObj.CurrentPage > 0) {
        thisPagerObj.PageRangeMin =
          thisPagerObj.CurrentPage + 9 > thisPagerObj.TotalPage
            ? thisPagerObj.CurrentPage - 9
            : thisPagerObj.CurrentPage === 1
            ? 1
            : thisPagerObj.CurrentPage - 1;
        thisPagerObj.PageRangeMax =
          thisPagerObj.CurrentPage + 9 > thisPagerObj.TotalPage
            ? thisPagerObj.TotalPage
            : thisPagerObj.CurrentPage + 9;
        if (thisPagerObj.PageArray.length > 10) {
          thisPagerObj.PageArray = [];
          for (
            var i = thisPagerObj.PageRangeMin;
            i < thisPagerObj.PageRangeMax;
            i++
          ) {
            thisPagerObj.PageArray.push(i);
          }
        }
      } else {
        thisPagerObj.PageRangeMin = 1;
        thisPagerObj.PageRangeMax = 1 + 9;
      }
    }

    return thisPagerObj;
  }

  writeToLog(log, obj, msg) {
    console.log(log, obj, msg);
  }

  BrowserGet() {
    return this.userAgent;
  }
}
