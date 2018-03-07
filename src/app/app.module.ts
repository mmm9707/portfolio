import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    AboutMeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'resume', component: ResumeComponent,},
      { path: 'about-me', component: AboutMeComponent,},
      { path: 'project', component: ProjectComponent,}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
