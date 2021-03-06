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
      Title: '????????? ???????????????',
      TitleInfo: '',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/Pub_Chinse.mp4',
      Button: [],
      RouletteType: 0,
      rules: [
        {
          Title: '????????? ',
          TitleSmall: '???????????????',
          img: './content/images/rule/UpAndDown_Public_1.jpg',
          Info: '15?????????',

          Notices: [
            { ruleText: '???????????? A,1,2,3,4....K,Joker (?????? 12.86:1)' },
            { ruleText: '???????????????????????????????????????????????????2.96:1???' },
            { ruleText: '???/????????????0.98:1???' },
            { ruleText: '??????A???8/ ??????9???Joker?????????0.98:1???' },
          ],
        },
        {
          Title: '?????????  ',
          TitleSmall:
            '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
          img: './content/images/rule/UpAndDown_Public_2.jpg',
          Info: '15??? ??????',
          Notices: [
            { ruleText: '???????????????0.96:1???' },
            { ruleText: '???????????????0.99:1???' },
          ],
        },
        {
          Title: '????????????',
          img: './content/images/rule/UpAndDown_Public_3.jpg',
          Info: '7??? ??????',
          Notices: [
            { ruleText: '??????????????????????????????0.96:1???' },
            { ruleText: '??????????????????????????????0.99:1???' },
          ],
        },
      ],
    },
    UpAndDownPublic_TW: {
      Title: '????????? ???????????????',
      TitleInfo: '',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/Pub_Chinse.mp4',
      Button: [],
      RouletteType: 0,
      rules: [
        {
          Title: '????????? ',
          TitleSmall: '???????????????',
          img: './content/images/rule/UpAndDown_Public_1.jpg',
          Info: '15?????????',

          Notices: [
            { ruleText: '???????????? A,1,2,3,4....K,Joker (?????? 12.86:1)' },
            { ruleText: '???????????????????????????????????????????????????2.96:1???' },
            { ruleText: '???/????????????0.98:1???' },
            { ruleText: '??????A???8/ ??????9???Joker?????????0.98:1???' },
          ],
        },
        {
          Title: '????????? ',
          TitleSmall:
            '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
          img: './content/images/rule/UpAndDown_Public_2.jpg',
          Info: '15??? ??????',
          Notices: [
            { ruleText: '???????????????0.96:1???' },
            { ruleText: '???????????????0.99:1???' },
          ],
        },
        {
          Title: '????????????',
          img: './content/images/rule/UpAndDown_Public_3.jpg',
          Info: '7??? ??????',
          Notices: [
            { ruleText: '??????????????????????????????0.96:1???' },
            { ruleText: '??????????????????????????????0.99:1???' },
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
      Title: '???????????? -??????????????? x 7???+??????????????? x 7???',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/VIP_Chinese.mp4',
      Button: [],
      RouletteType: 0,
      TitleInfo: 'Banker Qualification - (Max bet x 7) + (Max bet x 7)',
      rules: [
        {
          Title: '????????? ',
          TitleSmall: '??? ????????????????????????????????????',
          Info:
            '15???????????????????????????????????????????????????????????????????????????????????????????????????',
          img: './content/images/rule/UpAndDown_VIP_1.jpg',
          Notices: [
            //   { ruleText: 'Card Numbers from A,1,2,3,4.....K, Joker (Odd 14:1)' },
            //   { ruleText: 'Shape. Spade, Heart, Club, Diamond (Odd 4:1)'},
            //   { ruleText: 'Red/Black (Odd 1:1)'},
            //   { ruleText: 'Big, A to 8/ Small, 9 to Joker (Odd 1:1)'},
          ],
        },
        {
          Title: '?????????',
          TitleSmall: '???????????????????????????????????????????????????',
          Info: '15??? ??????',
          img: './content/images/rule/UpAndDown_VIP_2.jpg',

          Notices: [
            { ruleText: '???/??? (??????1:1)' },
            { ruleText: '??????A???8/ ??????9???Joker (??????1:1)' },
          ],
        },
        {
          Title: '?????????',
          TitleSmall:
            '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
          Info: '15??? ??????',
          img: './content/images/rule/UpAndDown_VIP_3.jpg',

          Notices: [
            { ruleText: '????????????????????????' },
            { ruleText: '* ????????????????????????' },
          ],
        },
      ],
    },
    UpAndDownVIP_TW: {
      Title: '???????????? -??????????????? x 7???+??????????????? x 7???',
      videoUrl: 'http://cdnsec.7stars.asia/video/Teach/VIP_Chinese.mp4',
      Button: [],
      RouletteType: 0,
      TitleInfo: 'Banker Qualification - (Max bet x 7) + (Max bet x 7)',
      rules: [
        {
          Title: '????????? ',
          TitleSmall: '??? ????????????????????????????????????',
          Info:
            '15???????????????????????????????????????????????????????????????????????????????????????????????????',
          img: './content/images/rule/UpAndDown_VIP_1.jpg',
          Notices: [
            // { ruleText: 'Card Numbers from A,1,2,3,4.....K, Joker (Odd 14:1)' },
            // { ruleText: 'Shape. Spade, Heart, Club, Diamond (Odd 4:1)'},
            // { ruleText: 'Red/Black (Odd 1:1)'},
            // { ruleText: 'Big, A to 8/ Small, 9 to Joker (Odd 1:1)'},
          ],
        },
        {
          Title: '?????????',
          TitleSmall: '???????????????????????????????????????????????????',
          Info: '15??? ??????',
          img: './content/images/rule/UpAndDown_VIP_2.jpg',

          Notices: [
            { ruleText: '???/??? (??????1:1)' },
            { ruleText: '??????A???8/ ??????9???Joker (??????1:1)' },
          ],
        },
        {
          Title: '?????????',
          TitleSmall:
            '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
          Info: '15??? ??????',
          img: './content/images/rule/UpAndDown_VIP_3.jpg',

          Notices: [
            { ruleText: '????????????????????????' },
            { ruleText: '* ????????????????????????' },
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
      Title: '????????????',
      Button: [
        {
          Title: '????????????',
        },
        {
          Title: '??????',
        },
        {
          Title: '???????????????',
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
                SmallTitle: '??????',
                TableTexts: [
                  {
                    BetName: '????????????',
                    ChipsAdd: 'A',
                    LotteryValue: '30',
                    payout: '35:1',
                  },
                  {
                    BetName: '????????????',
                    ChipsAdd: 'B',
                    LotteryValue: '11 or 14',
                    payout: '17:1',
                  },
                  {
                    BetName: '??????????????????',
                    ChipsAdd: 'C',
                    LotteryValue: '19,20,21',
                    payout: '11:1',
                  },
                  {
                    BetName: '???????????????',
                    ChipsAdd: 'D',
                    LotteryValue: '25,26,28,29',
                    payout: '8:1',
                  },
                  {
                    BetName: '???????????????',
                    ChipsAdd: 'E',
                    LotteryValue: '0,1,2,3',
                    payout: '8:1',
                  },
                  {
                    BetName: '????????????',
                    ChipsAdd: 'F',
                    LotteryValue: '4,5,6,7,8,9',
                    payout: '5:1',
                  },
                ],
              },
              {
                SmallTitle: '??????',
                TableTexts: [
                  {
                    BetName: '??????',
                    ChipsAdd: 'G',
                    LotteryValue: '????????????',
                    payout: '2:1',
                  },
                  {
                    BetName: '???????????????',
                    ChipsAdd: 'H',
                    LotteryValue: '???12',
                    payout: '2:1',
                  },
                  {
                    BetName: '???/???',
                    ChipsAdd: 'I',
                    LotteryValue: '???',
                    payout: '1:1',
                  },
                  {
                    BetName: '???/???',
                    ChipsAdd: 'J',
                    LotteryValue: '???',
                    payout: '1:1',
                  },
                  {
                    BetName: '???/???',
                    ChipsAdd: 'K',
                    LotteryValue: '19 - 36',
                    payout: '1:1',
                  },
                ],
              },
            ],
          },
          GroupBet: {
            Title: '??????',
            TitleImg: './content/images/rule/rouletteRule.png',
            TableTexts: [
              {
                GroupClass: 'BlueBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '27, 13, 36, 11, 30, 8, 23,10, 5, 24, 16, 33',
              },
              {
                GroupClass: 'GreenBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '17, 34, 6, 1, 20, 14, 31, 9',
              },
              {
                GroupClass: 'RedBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '19, 4, 21, 2, 25, 22, 18, 29, 7, 28',
              },
              {
                GroupClass: 'YellowBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '15, 32, 0, 26, 3, 35, 12',
              },
              {
                GroupClass: '',
                GroupImg: './content/images/rule/rouletteRule3.png',
                GroupTitle: '',
                GroupText: '??????????????????????????????????????????????????????????????????????????????????????? : 13, 36, 11, 30, 8, 23, 10. ??? : 34, 17, 25, 2, 21, 4, 19, 15',
              },
            ],
          },
          OddAndBetLimited: {
            Title: '???????????????',
            TableTexts: [
              {
                Description: '??????',
                BetNumber: '0',
                Pays: '35:1',
                Maxmum: '1-100',
              },
              {
                Description: '????????????',
                BetNumber: '2,3,17,20',
                Pays: '17:1',
                Maxmum: '1-200',
              },
              {
                Description: '??????????????????',
                BetNumber: '1-2-3 , 25-26-27',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '???????????????????????????',
                BetNumber: '0-1-2 , 0-2-3',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '???????????????',
                BetNumber: '7-8-10-11 , 26-27-29-30',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '??????????????????????????????',
                BetNumber: '0-1-2-3',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '????????????',
                BetNumber: '4-5-6-7-8-9 , 22-23-24-25-26-27',
                Pays: '5:1',
                Maxmum: '1-600',
              },
              {
                Description: '????????????????????????',
                BetNumber: '????????????????????????',
                Pays: '2:1',
                Maxmum: '1-1000',
              },
              {
                Description: '???/?????????/?????????/???',
                BetNumber: '???/?????????/?????????/???',
                Pays: '1:1',
                Maxmum: '1-2000',
              },
            ],
          },
        },
      ],
    },
    Roulette_TW: {
      Title: '????????????',
      videoUrl: '',
      Button: [
        {
          Title: '????????????',
        },
        {
          Title: '??????',
        },
        {
          Title: '???????????????',
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
                SmallTitle: '??????',
                TableTexts: [
                  {
                    BetName: '????????????',
                    ChipsAdd: 'A',
                    LotteryValue: '30',
                    payout: '35:1',
                  },
                  {
                    BetName: '????????????',
                    ChipsAdd: 'B',
                    LotteryValue: '11 or 14',
                    payout: '17:1',
                  },
                  {
                    BetName: '??????????????????',
                    ChipsAdd: 'C',
                    LotteryValue: '19,20,21',
                    payout: '11:1',
                  },
                  {
                    BetName: '???????????????',
                    ChipsAdd: 'D',
                    LotteryValue: '25,26,28,29',
                    payout: '8:1',
                  },
                  {
                    BetName: '???????????????',
                    ChipsAdd: 'E',
                    LotteryValue: '0,1,2,3',
                    payout: '8:1',
                  },
                  {
                    BetName: '????????????',
                    ChipsAdd: 'F',
                    LotteryValue: '4,5,6,7,8,9',
                    payout: '5:1',
                  },
                ],
              },
              {
                SmallTitle: '??????',
                TableTexts: [
                  {
                    BetName: '??????',
                    ChipsAdd: 'G',
                    LotteryValue: '????????????',
                    payout: '2:1',
                  },
                  {
                    BetName: '???????????????',
                    ChipsAdd: 'H',
                    LotteryValue: '???12',
                    payout: '2:1',
                  },
                  {
                    BetName: '???/???',
                    ChipsAdd: 'I',
                    LotteryValue: '???',
                    payout: '1:1',
                  },
                  {
                    BetName: '???/???',
                    ChipsAdd: 'J',
                    LotteryValue: '???',
                    payout: '1:1',
                  },
                  {
                    BetName: '???/???',
                    ChipsAdd: 'K',
                    LotteryValue: '19 - 36',
                    payout: '1:1',
                  },
                ],
              },
            ],
          },
          GroupBet: {
            Title: '??????',
            TitleImg: './content/images/rule/rouletteRule.png',
            TableTexts: [
              {
                GroupClass: 'BlueBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '27, 13, 36, 11, 30, 8, 23,10, 5, 24, 16, 33',
              },
              {
                GroupClass: 'GreenBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '17, 34, 6, 1, 20, 14, 31, 9',
              },
              {
                GroupClass: 'RedBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '19, 4, 21, 2, 25, 22, 18, 29, 7, 28',
              },
              {
                GroupClass: 'YellowBall',
                GroupImg: '',
                GroupTitle: '??????',
                GroupText: '15, 32, 0, 26, 3, 35, 12',
              },
              {
                GroupClass: '',
                GroupImg: './content/images/rule/rouletteRule3.png',
                GroupTitle: '',
                GroupText: '??????????????????????????????????????????????????????????????????????????????????????? : 13, 36, 11, 30, 8, 23, 10. ??? : 34, 17, 25, 2, 21, 4, 19, 15',
              },
            ],
          },
          OddAndBetLimited: {
            Title: '???????????????',
            TableTexts: [
              {
                Description: '??????',
                BetNumber: '0',
                Pays: '35:1',
                Maxmum: '1-100',
              },
              {
                Description: '????????????',
                BetNumber: '2,3,17,20',
                Pays: '17:1',
                Maxmum: '1-200',
              },
              {
                Description: '??????????????????',
                BetNumber: '1-2-3 , 25-26-27',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '???????????????????????????',
                BetNumber: '0-1-2 , 0-2-3',
                Pays: '11:1',
                Maxmum: '1-300',
              },
              {
                Description: '???????????????',
                BetNumber: '7-8-10-11 , 26-27-29-30',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '??????????????????????????????',
                BetNumber: '0-1-2-3',
                Pays: '8:1',
                Maxmum: '1-400',
              },
              {
                Description: '????????????',
                BetNumber: '4-5-6-7-8-9 , 22-23-24-25-26-27',
                Pays: '5:1',
                Maxmum: '1-600',
              },
              {
                Description: '????????????????????????',
                BetNumber: '????????????????????????',
                Pays: '2:1',
                Maxmum: '1-1000',
              },
              {
                Description: '???/?????????/?????????/???',
                BetNumber: '???/?????????/?????????/???',
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
