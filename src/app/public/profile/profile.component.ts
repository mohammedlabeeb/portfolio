import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { slideInOutAnimation } from "../../shared/animations/index";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' },
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
