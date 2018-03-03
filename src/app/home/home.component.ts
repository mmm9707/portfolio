import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var $ : any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  ngOnInit() {
    $('.carousel').carousel({
      dist: -50,
    });
  }
}
