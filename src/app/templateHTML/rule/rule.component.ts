import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../common/Language/language.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss'],
})
export class RuleComponent implements OnInit {
  constructor(
    public languageService: LanguageService
  ) {}

  currentLotteryTimer: any = 0;

  dataSource = {
    LanguageRead: '',
    LotteryType: { now: '', last: '' },
    LanguageType: { now: '', last: '' },
    RuleOpen: false,
    RuleCode: 1,
    currentLotteryTimer: {},
    ShowRules: {
      Title: '',
      TitleInfo: '',
      videoUrl: '',
      Button: [],
      RouletteType: 0,
      rules: [],
    },
    UpAndDownPublic: {
      Title: 'UpAndDown Public',
      TitleInfo: '',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/Pub_Eng.mp4',
      Button: [],
      RouletteType: 0,
      rules: [
        {
          Title: 'Round 1 ',
          TitleSmall: '(Middle Card)',
          img: './content/images/rule/UpAndDown_Public_1.jpg',
          Info: '15sec Bet for',

          Notices: [
            { ruleText: 'Card Numbers from A,1,2,3,4.....K, Joker (Odd 12.86:1)' },
            { ruleText: 'Shape. Spade, Heart, Club, Diamond (Odd 2.96:1)' },
            { ruleText: 'Red/Black (Odd 0.98:1)' },
            { ruleText: 'Big, A to 8/ Small, 9 to Joker (Odd 0.98:1)' },
          ],
        },
        {
          Title: 'Round 2 ',
          TitleSmall:
            '(open card start from up then down, then up again repeatedly until same number open at either side, the side that open the same card number as middle card wins)',
          img: './content/images/rule/UpAndDown_Public_2.jpg',
          Info: '15sec Bet for',

          Notices: [
            { ruleText: 'Up (Odd 0.96:1)' },
            { ruleText: 'Down (Odd 0.99:1)' }
          ],
        },
        {
          Title: 'Round 3 (Middle Card)',
          img: './content/images/rule/UpAndDown_Public_3.jpg',
          Info: '7sec Bet for',
          Notices: [
            { ruleText: 'Top up Bet for Up (Odd 0.96:1)' },
            { ruleText: 'Top up Bet for Down (Odd 0.99:1)' },
          ],
        },
      ],
    },
    UpAndDownPublic_CN: {
      Title: '上下家 （大众房）',
      TitleInfo: '',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/Pub_Chinse.mp4',
      Button: [],
      RouletteType: 0,
      rules: [
        {
          Title: '第一圈 ',
          TitleSmall: '（中间卡）',
          img: './content/images/rule/UpAndDown_Public_1.jpg',
          Info: '15秒下注',

          Notices: [
            { ruleText: '单独卡号 A,1,2,3,4....K,Joker (赔率 12.86:1)' },
            { ruleText: '花色。桃花、红心、梅花和方块（赔率2.96:1）' },
            { ruleText: '红/黑（赔率0.98:1）' },
            { ruleText: '大，A到8/ 小，9到Joker（赔率0.98:1）' },
          ],
        },
        {
          Title: '第二圈  ',
          TitleSmall:
            '（开牌从上家到下家，然后再到上家，重复至到其中一方开出与中间牌相同的号码，那就是赢方）',
          img: './content/images/rule/UpAndDown_Public_2.jpg',
          Info: '15秒 下注',
          Notices: [
            { ruleText: '上家（赔率0.96:1）' },
            { ruleText: '下家（赔率0.99:1）' },
          ],
        },
        {
          Title: '加码环节',
          img: './content/images/rule/UpAndDown_Public_3.jpg',
          Info: '7秒 下注',
          Notices: [
            { ruleText: '加码，下注上家（倍率0.96:1）' },
            { ruleText: '加码，下注下家（倍率0.99:1）' },
          ],
        },
      ],
    },
    UpAndDownPublic_TW: {
      Title: '上下家 （大眾房）',
      TitleInfo: '',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/Pub_Chinse.mp4',
      Button: [],
      RouletteType: 0,
      rules: [
        {
          Title: '第一圈 ',
          TitleSmall: '（中間卡）',
          img: './content/images/rule/UpAndDown_Public_1.jpg',
          Info: '15秒下注',

          Notices: [
            { ruleText: '單獨卡號 A,1,2,3,4....K,Joker (賠率 12.86:1)' },
            { ruleText: '花色。桃花、紅心、梅花和方塊（賠率2.96:1）' },
            { ruleText: '紅/黑（賠率0.98:1）' },
            { ruleText: '大，A到8/ 小，9到Joker（賠率0.98:1）' },
          ],
        },
        {
          Title: '第二圈 ',
          TitleSmall:
            '（開牌從上家到下家，然後再到上家，重複至到其中一方開出與中間牌相同的號碼，那就是贏方）',
          img: './content/images/rule/UpAndDown_Public_2.jpg',
          Info: '15秒 下注',
          Notices: [
            { ruleText: '上家（賠率0.96:1）' },
            { ruleText: '下家（賠率0.99:1）' },
          ],
        },
        {
          Title: '加碼環節',
          img: './content/images/rule/UpAndDown_Public_3.jpg',
          Info: '7秒 下注',
          Notices: [
            { ruleText: '加碼，下注上家（倍率0.96:1）' },
            { ruleText: '加碼，下注下家（倍率0.99:1）' },
          ],
        },
      ],
    },
    UpAndDownVIP: {
      Title: 'Up & Down VIP(Player to Player game)',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/VIP_Eng.mp4',
      Button: [],
      RouletteType: 0,
      TitleInfo: 'Banker Qualification - (Max bet x 7) + (Max bet x 7)',
      rules: [
        {
          Title: 'Round 1 ',
          TitleSmall:
            '(Next Player after Banker entitle to choose Middle Card)',
          Info: '15sec to choose or proceed 2nd round',
          img: './content/images/rule/UpAndDown_VIP_1.jpg',
          Notices: [
            //   { ruleText: 'Card Numbers from A,1,2,3,4.....K, Joker (Odd 14:1)' },
            //   { ruleText: 'Shape. Spade, Heart, Club, Diamond (Odd 4:1)'},
            //   { ruleText: 'Red/Black (Odd 1:1)'},
            //   { ruleText: 'Big, A to 8/ Small, 9 to Joker (Odd 1:1)'},
          ],
        },
        {
          Title: 'Round 2',
          TitleSmall: '(Middle Card if Player give up choosing middle card)',
          Info: '15sec Bet for',
          img: './content/images/rule/UpAndDown_VIP_2.jpg',

          Notices: [
            { ruleText: 'Red/Black (Odd 1:1)' },
            { ruleText: 'Big, A to 8/ Small, 9 to Joker (Odd 1:1)' },
          ],
        },
        {
          Title: 'Round 3',
          TitleSmall:
            '(open card start from up then down, then up again repeatedly until same number open at either side, the side that open the same card number as middle card wins)',
          Info: '15sec Bet for',
          img: './content/images/rule/UpAndDown_VIP_3.jpg',

          Notices: [
            { ruleText: 'Player can only bet Up (Odd 1:1)' },
            { ruleText: '* Banker always represents Down' },
          ],
        },
      ],
    },
    UpAndDownVIP_CN: {
      Title: '上庄资格 -（最高注码 x 7）+（最高注码 x 7）',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/VIP_Chinese.mp4',
      Button: [],
      RouletteType: 0,
      TitleInfo: 'Banker Qualification - (Max bet x 7) + (Max bet x 7)',
      rules: [
        {
          Title: '第一圈 ',
          TitleSmall: '（ 庄家的下家可以选中间牌）',
          Info:
            '15秒让下家选中间牌，可以选择放弃选牌，若放弃就公开到第二圈让大家下注',
          img: './content/images/rule/UpAndDown_VIP_1.jpg',
          Notices: [
            //   { ruleText: 'Card Numbers from A,1,2,3,4.....K, Joker (Odd 14:1)' },
            //   { ruleText: 'Shape. Spade, Heart, Club, Diamond (Odd 4:1)'},
            //   { ruleText: 'Red/Black (Odd 1:1)'},
            //   { ruleText: 'Big, A to 8/ Small, 9 to Joker (Odd 1:1)'},
          ],
        },
        {
          Title: '第二圈',
          TitleSmall: '（若下家放弃选牌，开放中间牌下注）',
          Info: '15秒 下注',
          img: './content/images/rule/UpAndDown_VIP_2.jpg',

          Notices: [
            { ruleText: '红/黑 (赔率1:1)' },
            { ruleText: '大，A到8/ 小，9到Joker (赔率1:1)' },
          ],
        },
        {
          Title: '第三圈',
          TitleSmall:
            '（开牌从上家到下家，然后再到上家，重复至到其中一方开出与中间牌相同的号码，那就是赢方）',
          Info: '15秒 下注',
          img: './content/images/rule/UpAndDown_VIP_3.jpg',

          Notices: [
            { ruleText: '玩家只能下注下家' },
            { ruleText: '* 庄家只能代表上家' },
          ],
        },
      ],
    },
    UpAndDownVIP_TW: {
      Title: '上莊資格 -（最高注碼 x 7）+（最高注碼 x 7）',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/VIP_Chinese.mp4',
      Button: [],
      RouletteType: 0,
      TitleInfo: 'Banker Qualification - (Max bet x 7) + (Max bet x 7)',
      rules: [
        {
          Title: '第一圈 ',
          TitleSmall: '（ 莊家的下家可以選中間牌）',
          Info:
            '15秒讓下家選中間牌，可以選擇放棄選牌，若放棄就公開到第二圈讓大家下注',
          img: './content/images/rule/UpAndDown_VIP_1.jpg',
          Notices: [
            // { ruleText: 'Card Numbers from A,1,2,3,4.....K, Joker (Odd 14:1)' },
            // { ruleText: 'Shape. Spade, Heart, Club, Diamond (Odd 4:1)'},
            // { ruleText: 'Red/Black (Odd 1:1)'},
            // { ruleText: 'Big, A to 8/ Small, 9 to Joker (Odd 1:1)'},
          ],
        },
        {
          Title: '第二圈',
          TitleSmall: '（若下家放棄選牌，開放中間牌下注）',
          Info: '15秒 下注',
          img: './content/images/rule/UpAndDown_VIP_2.jpg',

          Notices: [
            { ruleText: '紅/黑 (賠率1:1)' },
            { ruleText: '大，A到8/ 小，9到Joker (賠率1:1)' },
          ],
        },
        {
          Title: '第三圈',
          TitleSmall:
            '（開牌從上家到下家，然後再到上家，重複至到其中一方開出與中間牌相同的號碼，那就是贏方）',
          Info: '15秒 下注',
          img: './content/images/rule/UpAndDown_VIP_3.jpg',

          Notices: [
            { ruleText: '玩家只能下注下家' },
            { ruleText: '* 莊家只能代表上家' },
          ],
        },
      ],
    },
    Roulette: {
      Title: 'Roulette',
      videoUrl: '',
      Button: [
        {
          Title: 'French Roulette',
        },
        {
          Title: 'Group Bet',
        },
        {
          Title: 'Odd and Bet Limited',
        },
      ],
      RouletteType: 0,
      TitleInfo: '',
      rules: [
        {
          FrenchRoulette: {
            Title: 'French Roulette',
            TitleImg: './content/images/rule/rouletteRule2.png',
            TableContent: [
              {
                SmallTitle: 'Inside Bet',
                TableTexts: [
                  {
                    BetName: 'Straight UP',
                    ChipsAdd: 'A',
                    LotteryValue: '30',
                    payout: '35:1',
                  },
                  {
                    BetName: 'Between 2',
                    ChipsAdd: 'B',
                    LotteryValue: '11 or 14',
                    payout: '17:1',
                  },
                  {
                    BetName: 'Street Bet',
                    ChipsAdd: 'C',
                    LotteryValue: '19,20,21',
                    payout: '11:1',
                  },
                  {
                    BetName: 'Corner Bet ',
                    ChipsAdd: 'D',
                    LotteryValue: '25,26,28,29',
                    payout: '8:1',
                  },
                  {
                    BetName: '4 Numbers',
                    ChipsAdd: 'E',
                    LotteryValue: '0,1,2,3',
                    payout: '8:1',
                  },
                  {
                    BetName: 'Line Bet',
                    ChipsAdd: 'F',
                    LotteryValue: '4,5,6,7,8,9',
                    payout: '5:1',
                  },
                ],
              },
              {
                SmallTitle: 'Outside Bet',
                TableTexts: [
                  {
                    BetName: 'Column',
                    ChipsAdd: 'G',
                    LotteryValue: 'set of column numbers',
                    payout: '2:1',
                  },
                  {
                    BetName: 'Dozen',
                    ChipsAdd: 'H',
                    LotteryValue: '3rd 12',
                    payout: '2:1',
                  },
                  {
                    BetName: 'Red / Black',
                    ChipsAdd: 'I',
                    LotteryValue: 'Red',
                    payout: '1:1',
                  },
                  {
                    BetName: 'Odd/Even ',
                    ChipsAdd: 'J',
                    LotteryValue: 'ODD',
                    payout: '1:1',
                  },
                  {
                    BetName: 'Low / High',
                    ChipsAdd: 'K',
                    LotteryValue: '19 - 36',
                    payout: '1:1',
                  },
                ],
              },
            ],
          },
          GroupBet: {
            Title: 'Group Bet',
            TitleImg: './content/images/rule/rouletteRule.png',
            TableTexts: [
              {
                GroupClass: 'BlueBall',
                GroupImg: '',
                GroupTitle: 'Group Bet',
                GroupText: '27, 13, 36, 11, 30, 8, 23,10, 5, 24, 16, 33',
              },
              {
                GroupClass: 'GreenBall',
                GroupImg: '',
                GroupTitle: 'Group Bet',
                GroupText: '17, 34, 6, 1, 20, 14, 31, 9',
              },
              {
                GroupClass: 'RedBall',
                GroupImg: '',
                GroupTitle: 'Group Bet',
                GroupText: '19, 4, 21, 2, 25, 22, 18, 29, 7, 28',
              },
              {
                GroupClass: 'YellowBall',
                GroupImg: '',
                GroupTitle: 'Group Bet',
                GroupText: '15, 32, 0, 26, 3, 35, 12',
              },
              {
                GroupClass: '',
                GroupImg: './content/images/rule/rouletteRule3.png',
                GroupTitle: '',
                GroupText: 'Neighbor bet means the left side number and right side number of the chosen number. You can chose the quantity neighbor as well, ie 8 neighbors of number 6, left : 13, 36, 11, 30, 8, 23, 10. Right : 34, 17, 25, 2, 21, 4, 19, 15',
              },
            ],
          },
          OddAndBetLimited: {
            Title: 'Odd and Bet Limited',
            TableTexts: [
              {
                Description: 'Bet on the exact number',
                BetNumber: '0',
                Pays: '35:1',
                Maxmum: '1-100',
              },
              {
                Description: 'Bet on two adjacent numbers',
                BetNumber: '2,3,17,20',
                Pays: '17:1',
                Maxmum: '1-200',
              },
              {
                Description: 'Bet on three consecutive numbers',
                BetNumber: '1-2-3 , 25-26-27',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: 'Bet on three numbers, one of numbers is zero',
                BetNumber: '0-1-2 , 0-2-3',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: 'Bet on four numbers ',
                BetNumber: '7-8-10-11 , 26-27-29-30',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: 'Bet on first four numbers  ',
                BetNumber: '0-1-2-3',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: 'Bet on six consective numbers ',
                BetNumber: '4-5-6-7-8-9 , 22-23-24-25-26-27',
                Pays: '5:1',
                Maxmum: '1-600',
              },
              {
                Description: 'Bet on twelve numbers',
                BetNumber: 'Dozen , Line of twelve',
                Pays: '2:1',
                Maxmum: '1-1000',
              },
              {
                Description: 'Bet on eighteen numbers',
                BetNumber: 'Black, Low , High, Odd',
                Pays: '1:1',
                Maxmum: '1-2000',
              },
            ],
          },
        },
      ],
    },
    Roulette_CN: {
      videoUrl: '',
      Title: '法国轮盘',
      Button: [
        {
          Title: '单号下注',
        },
        {
          Title: '群注',
        },
        {
          Title: '赔率和限注',
        },
      ],
      RouletteType: 0,
      TitleInfo: '',
      rules: [
        {
          FrenchRoulette: {
            Title: 'French Roulette',
            TitleImg: './content/images/rule/rouletteRule2.png',
            TableContent: [
              {
                SmallTitle: '内围',
                TableTexts: [
                  {
                    BetName: '单号下注',
                    ChipsAdd: 'A',
                    LotteryValue: '30',
                    payout: '35:1',
                  },
                  {
                    BetName: '两个邻号',
                    ChipsAdd: 'B',
                    LotteryValue: '11 or 14',
                    payout: '17:1',
                  },
                  {
                    BetName: '三个竖线连号',
                    ChipsAdd: 'C',
                    LotteryValue: '19,20,21',
                    payout: '11:1',
                  },
                  {
                    BetName: '四个连角号',
                    ChipsAdd: 'D',
                    LotteryValue: '25,26,28,29',
                    payout: '8:1',
                  },
                  {
                    BetName: '四特号之间',
                    ChipsAdd: 'E',
                    LotteryValue: '0,1,2,3',
                    payout: '8:1',
                  },
                  {
                    BetName: '六个连号',
                    ChipsAdd: 'F',
                    LotteryValue: '4,5,6,7,8,9',
                    payout: '5:1',
                  },
                ],
              },
              {
                SmallTitle: '外围',
                TableTexts: [
                  {
                    BetName: '横号',
                    ChipsAdd: 'G',
                    LotteryValue: '横向数字',
                    payout: '2:1',
                  },
                  {
                    BetName: '十二个连号',
                    ChipsAdd: 'H',
                    LotteryValue: '后12',
                    payout: '2:1',
                  },
                  {
                    BetName: '红/黑',
                    ChipsAdd: 'I',
                    LotteryValue: '红',
                    payout: '1:1',
                  },
                  {
                    BetName: '单/双',
                    ChipsAdd: 'J',
                    LotteryValue: '单',
                    payout: '1:1',
                  },
                  {
                    BetName: '高/低',
                    ChipsAdd: 'K',
                    LotteryValue: '19 - 36',
                    payout: '1:1',
                  },
                ],
              },
            ],
          },
          GroupBet: {
            Title: '群注',
            TitleImg: './content/images/rule/rouletteRule.png',
            TableTexts: [
              {
                GroupClass: 'BlueBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '27, 13, 36, 11, 30, 8, 23,10, 5, 24, 16, 33',
              },
              {
                GroupClass: 'GreenBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '17, 34, 6, 1, 20, 14, 31, 9',
              },
              {
                GroupClass: 'RedBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '19, 4, 21, 2, 25, 22, 18, 29, 7, 28',
              },
              {
                GroupClass: 'YellowBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '15, 32, 0, 26, 3, 35, 12',
              },
              {
                GroupClass: '',
                GroupImg: './content/images/rule/rouletteRule3.png',
                GroupTitle: '',
                GroupText: '范围下注是选号的左右号码。您可以选择左右的邻号数量，比如左 : 13, 36, 11, 30, 8, 23, 10. 右 : 34, 17, 25, 2, 21, 4, 19, 15',
              },
            ],
          },
          OddAndBetLimited: {
            Title: '赔率和限注',
            TableTexts: [
              {
                Description: '单号',
                BetNumber: '0',
                Pays: '35:1',
                Maxmum: '1-100',
              },
              {
                Description: '两个邻号',
                BetNumber: '2,3,17,20',
                Pays: '17:1',
                Maxmum: '1-200',
              },
              {
                Description: '三个竖线连号',
                BetNumber: '1-2-3 , 25-26-27',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '三个连号，包括零号',
                BetNumber: '0-1-2 , 0-2-3',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '四个连角号',
                BetNumber: '7-8-10-11 , 26-27-29-30',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '四个连角号，包括零号',
                BetNumber: '0-1-2-3',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '六个连号',
                BetNumber: '4-5-6-7-8-9 , 22-23-24-25-26-27',
                Pays: '5:1',
                Maxmum: '1-600',
              },
              {
                Description: '横号，十二个连号',
                BetNumber: '横号，十二个连号',
                Pays: '2:1',
                Maxmum: '1-1000',
              },
              {
                Description: '红/黑，单/双，高/低',
                BetNumber: '红/黑，单/双，高/低',
                Pays: '1:1',
                Maxmum: '1-2000',
              },
            ],
          },
        },
      ],
    },
    Roulette_TW: {
      Title: '法國輪盤',
      videoUrl: '',
      Button: [
        {
          Title: '單號下注',
        },
        {
          Title: '群注',
        },
        {
          Title: '賠率和限注',
        },
      ],
      RouletteType: 0,
      TitleInfo: '',
      rules: [
        {
          FrenchRoulette: {
            Title: 'French Roulette',
            TitleImg: './content/images/rule/rouletteRule2.png',
            TableContent: [
              {
                SmallTitle: '內圍',
                TableTexts: [
                  {
                    BetName: '單號下注',
                    ChipsAdd: 'A',
                    LotteryValue: '30',
                    payout: '35:1',
                  },
                  {
                    BetName: '兩個鄰號',
                    ChipsAdd: 'B',
                    LotteryValue: '11 or 14',
                    payout: '17:1',
                  },
                  {
                    BetName: '三個豎線連號',
                    ChipsAdd: 'C',
                    LotteryValue: '19,20,21',
                    payout: '11:1',
                  },
                  {
                    BetName: '四個連角號',
                    ChipsAdd: 'D',
                    LotteryValue: '25,26,28,29',
                    payout: '8:1',
                  },
                  {
                    BetName: '四特號之間',
                    ChipsAdd: 'E',
                    LotteryValue: '0,1,2,3',
                    payout: '8:1',
                  },
                  {
                    BetName: '六個連號',
                    ChipsAdd: 'F',
                    LotteryValue: '4,5,6,7,8,9',
                    payout: '5:1',
                  },
                ],
              },
              {
                SmallTitle: '外圍',
                TableTexts: [
                  {
                    BetName: '橫號',
                    ChipsAdd: 'G',
                    LotteryValue: '橫向數字',
                    payout: '2:1',
                  },
                  {
                    BetName: '十二個連號',
                    ChipsAdd: 'H',
                    LotteryValue: '後12',
                    payout: '2:1',
                  },
                  {
                    BetName: '紅/黑',
                    ChipsAdd: 'I',
                    LotteryValue: '紅',
                    payout: '1:1',
                  },
                  {
                    BetName: '單/雙',
                    ChipsAdd: 'J',
                    LotteryValue: '單',
                    payout: '1:1',
                  },
                  {
                    BetName: '高/低',
                    ChipsAdd: 'K',
                    LotteryValue: '19 - 36',
                    payout: '1:1',
                  },
                ],
              },
            ],
          },
          GroupBet: {
            Title: '群注',
            TitleImg: './content/images/rule/rouletteRule.png',
            TableTexts: [
              {
                GroupClass: 'BlueBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '27, 13, 36, 11, 30, 8, 23,10, 5, 24, 16, 33',
              },
              {
                GroupClass: 'GreenBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '17, 34, 6, 1, 20, 14, 31, 9',
              },
              {
                GroupClass: 'RedBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '19, 4, 21, 2, 25, 22, 18, 29, 7, 28',
              },
              {
                GroupClass: 'YellowBall',
                GroupImg: '',
                GroupTitle: '群注',
                GroupText: '15, 32, 0, 26, 3, 35, 12',
              },
              {
                GroupClass: '',
                GroupImg: './content/images/rule/rouletteRule3.png',
                GroupTitle: '',
                GroupText: '範圍下注是選號的左右號碼。您可以選擇左右的鄰號數量，比如左 : 13, 36, 11, 30, 8, 23, 10. 右 : 34, 17, 25, 2, 21, 4, 19, 15',
              },
            ],
          },
          OddAndBetLimited: {
            Title: '賠率和限注',
            TableTexts: [
              {
                Description: '單號',
                BetNumber: '0',
                Pays: '35:1',
                Maxmum: '1-100',
              },
              {
                Description: '兩個鄰號',
                BetNumber: '2,3,17,20',
                Pays: '17:1',
                Maxmum: '1-200',
              },
              {
                Description: '三個豎線連號',
                BetNumber: '1-2-3 , 25-26-27',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '三個連號，包括零號',
                BetNumber: '0-1-2 , 0-2-3',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '四個連角號',
                BetNumber: '7-8-10-11 , 26-27-29-30',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '四個連角號，包括零號',
                BetNumber: '0-1-2-3',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '六個連號',
                BetNumber: '4-5-6-7-8-9 , 22-23-24-25-26-27',
                Pays: '5:1',
                Maxmum: '1-600',
              },
              {
                Description: '橫號，十二個連號',
                BetNumber: '橫號，十二個連號',
                Pays: '2:1',
                Maxmum: '1-1000',
              },
              {
                Description: '紅/黑，單/雙，高/低',
                BetNumber: '紅/黑，單/雙，高/低',
                Pays: '1:1',
                Maxmum: '1-2000',
              },
            ],
          },
        },
      ],
    },
  };

  ngOnInit() {
    this.currentLotteryTimer = setInterval(() => {
      this.dataSource.LotteryType.now = localStorage.getItem('EnteredGameType');
      this.dataSource.LanguageRead = this.dataSource.LanguageType.now = localStorage.getItem('LanguageRead');
      this.dataSource.RuleOpen = Boolean(localStorage.getItem('RuleOpen'));
      this.OpenRule();

      if (this.dataSource.LanguageType.now != this.dataSource.LanguageType.last) {
        this.dataSource.LotteryType.last = this.dataSource.LotteryType.now;
        this.ChangeRules(this.dataSource.LotteryType.last);
      }

      if (this.dataSource.LotteryType.now != this.dataSource.LotteryType.last) {
        this.dataSource.LotteryType.last = this.dataSource.LotteryType.now;
        this.ChangeRules(this.dataSource.LotteryType.last);
      }
    }, 1500);
  }

  OpenRule() {
    if (this.dataSource.RuleOpen) {
      $('#btnRule').click();
      this.dataSource.RuleOpen = false;
      localStorage.removeItem('RuleOpen');
    }
  }

  ChangeRules(ruleCode) {
    this.dataSource.RuleCode = parseInt(ruleCode);
    switch (ruleCode) {
      case '1':
        if (this.dataSource.LanguageRead === 'zhcn') {
          this.dataSource.ShowRules = this.dataSource.UpAndDownPublic_CN;
        }
        else if (this.dataSource.LanguageRead === 'zhtw'){
          this.dataSource.ShowRules = this.dataSource.UpAndDownPublic_TW;
        }
        else{
          this.dataSource.ShowRules = this.dataSource.UpAndDownPublic;
        }
        break;
      case '2':
        if (this.dataSource.LanguageRead === 'zhcn') {
          this.dataSource.ShowRules = this.dataSource.UpAndDownVIP_CN;
        }
        else if (this.dataSource.LanguageRead === 'zhtw') {
          this.dataSource.ShowRules = this.dataSource.UpAndDownVIP_TW;
        }
        else {
          this.dataSource.ShowRules = this.dataSource.UpAndDownVIP;
        }
        break;
      case '3':
        if (this.dataSource.LanguageRead === 'zhcn') {
          this.dataSource.ShowRules = this.dataSource.Roulette_CN;
        }
        else if (this.dataSource.LanguageRead === 'zhtw') {
          this.dataSource.ShowRules = this.dataSource.Roulette_TW;
        }
        else {
          this.dataSource.ShowRules = this.dataSource.Roulette;
        }
        break;
    }
  }

  SetRouletteType(rouletteType) {
    this.dataSource.ShowRules.RouletteType = rouletteType;
  }

  SetTimeoutClear() {
    if (this.dataSource.currentLotteryTimer) {
      clearInterval(this.currentLotteryTimer);
    }
  }
}
