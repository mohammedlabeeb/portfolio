import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { slideInOutAnimation } from "../../shared/animations/index";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //animations: [slideInOutAnimation],
  //host: { '[@slideInOutAnimation]': '' },
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  greetings: string = "";
  title: string = "";
  tagLine: string = "";
  buttonText: string = "";
  nextPage: string = "profile";

  constructor() { }

  ngOnInit() {
    this.greetings = "Hello..";
    this.title = "I'M Labeeb..";
    this.tagLine = "FullStack Web Developer";
    this.buttonText = "View More";

    this.nextPage = "/profile";
  }

}
