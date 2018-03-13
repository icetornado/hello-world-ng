import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import {AuthorsService} from './authors/authors.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
