import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from 'src/app/courses.component';
import { CoursesCliComponent } from './courses-cli/courses-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
