import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-RacingHorse',
  templateUrl: './RacingHorse.component.html',
  styleUrls: ['./RacingHorse.component.scss']
})
export class RacingHorseComponent implements OnInit {

  changeText: boolean;

  constructor() {
    this.changeText = false;
   }

  ngOnInit() {
  }

   dataSource = {
    isLoginNow: false,
    isShowPwd: false,
    isShowMemberFn: true,
    isShowHamburg: false,
    gameTopNavOpen:false,
    ChipsMobileOpen:false,
    gameRuleBtn:false,
    gameHistoryBtn:false,
    gameVideoEvent:false,
    thirdPartyUrl: '',
    currentLotteryTimer: {},
    routerURL: '',
    lobbyClass: '',
    windowWidth:991,
    horseInfoArray:[
      {
        horseChipText:'01',
        NumPIC:'content/images/horseNum/01.png',
        AnimalPIC:'content/images/horseAnimal/01.png',
        horseSpeadFull:'content/images/horseIcon/01/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/01/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/01/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/01/starHalf.png',
        gradientBg:'redBg',
      },
      {
        horseChipText:'02',
        NumPIC:'content/images/horseNum/02.png',
        AnimalPIC:'content/images/horseAnimal/02.png',
        horseSpeadFull:'content/images/horseIcon/02/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/02/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/02/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/02/starHalf.png',
        gradientBg:'pinkBg',
      },
      {
        horseChipText:'03',
        NumPIC:'content/images/horseNum/03.png',
        AnimalPIC:'content/images/horseAnimal/03.png',
        horseSpeadFull:'content/images/horseIcon/03/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/03/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/03/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/03/starHalf.png',
        gradientBg:'orangeBg',
      },
      {
        horseChipText:'04',
        NumPIC:'content/images/horseNum/04.png',
        AnimalPIC:'content/images/horseAnimal/04.png',
        horseSpeadFull:'content/images/horseIcon/04/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/04/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/04/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/04/starHalf.png',
        gradientBg:'grayBg',
      },
      {
        horseChipText:'05',
        NumPIC:'content/images/horseNum/05.png',
        AnimalPIC:'content/images/horseAnimal/05.png',
        horseSpeadFull:'content/images/horseIcon/05/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/05/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/05/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/05/starHalf.png',
        gradientBg:'greenBg',
      },
      {
        horseChipText:'06',
        NumPIC:'content/images/horseNum/06.png',
        AnimalPIC:'content/images/horseAnimal/06.png',
        horseSpeadFull:'content/images/horseIcon/06/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/06/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/06/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/06/starHalf.png',
        gradientBg:'blueBg',
      },
      {
        horseChipText:'07',
        NumPIC:'content/images/horseNum/07.png',
        AnimalPIC:'content/images/horseAnimal/07.png',
        horseSpeadFull:'content/images/horseIcon/07/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/07/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/07/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/07/starHalf.png',
        gradientBg:'purpleBg',
      },
      {
        horseChipText:'08',
        NumPIC:'content/images/horseNum/08.png',
        AnimalPIC:'content/images/horseAnimal/08.png',
        horseSpeadFull:'content/images/horseIcon/08/horseFull.png',
        horseSpeadHalf:'content/images/horseIcon/08/horseEmpty.png',
        horseJockeyFull:'content/images/horseIcon/08/starFull.png',
        horseJockeyHalf:'content/images/horseIcon/08/starHalf.png',
        gradientBg:'grassBg',
      },
    ],
    horseChipsArray:[
      {
        Img:'content/images/horseChips/01.png',
        Text:'1K',
      },
      {
        Img:'content/images/horseChips/02.png',
        Text:'5K',
      },
      {
        Img:'content/images/horseChips/03.png',
        Text:'10K',
      },
      {
        Img:'content/images/horseChips/04.png',
        Text:'50K',
      },
      {
        Img:'content/images/horseChips/05.png',
        Text:'100K',
      },
    ],
    horseInputStyle:[
      {
        class:'text-red',
      },
      {
        class:'text-peachPurple',
      },
      {
        class:'text-sky',
      },
      {
        class:'text-aquaGreen',
      },
    ],
  };

  gameTopNavEvent() {
    this.dataSource.gameTopNavOpen = !this.dataSource.gameTopNavOpen;

  }
  // OnResize() {
  //   this.dataSource.windowWidth = window.innerWidth;
  //   if(this.dataSource.windowWidth > 991){
  //     this.dataSource.ChipsMobileOpen = false;
  //   }
  // }
  ChipsMobileEvent() {

    this.dataSource.ChipsMobileOpen = !this.dataSource.ChipsMobileOpen;
    // if ( this.dataSource.windowWidth < 991) {
    //   this.dataSource.ChipsMobileOpen = false;
    // }
  }

  gameRuleBtnOver(){
    this.dataSource.gameRuleBtn = true;
  }

  gameRuleBtnOut(){
    this.dataSource.gameRuleBtn = false;
  }

  gameHistoryBtnOver(){
    this.dataSource.gameHistoryBtn = true;
  }

  gameHistoryBtnOut(){
    this.dataSource.gameHistoryBtn = false;
  }

  gameVideoEvent(){
    this.dataSource.gameVideoEvent = !this.dataSource.gameVideoEvent;
  }
}


