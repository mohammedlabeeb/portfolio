import { Component, OnInit , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Labeeb123");
  }

}
