import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from "../../shared/animations/index";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' },
})
export class ServicesComponent implements OnInit {

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
