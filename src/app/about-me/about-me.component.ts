import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'story',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent   {
  ngOnInit(){
    $('.collapsible').collapsible();
  }
}
