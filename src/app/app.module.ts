import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { InputFormatDirective } from './directives/input-format.directive';
import { CourseFormComponent } from './course-form/course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseFormComponent,
    CoursesComponent,
    AuthorsComponent,
    InputFormatDirective,
    CourseFormComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      NgbModule.forRoot(),
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
