import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  start(){
    document.getElementById("overlay").style.display = "block";
  }

  stop() {
    document.getElementById("overlay").style.display = "none";
  }
}
