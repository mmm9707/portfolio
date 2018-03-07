import { Component, OnInit } from '@angular/core';

declare var $: any;

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
