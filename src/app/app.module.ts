import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthorFormComponent } from './author-form/author-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseFormComponent,
    CoursesComponent,
    AuthorsComponent,
    InputFormatDirective,
    CourseFormComponent,
    AuthorFormComponent,
    NavbarComponent,
    FourOhFourComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      NgbModule.forRoot(),
      // HttpModule,
      HttpClientModule,
      RouterModule.forRoot([
          {
              path: '',
              component: CoursesComponent
          },
          {
              path: 'courses',
              component: CoursesComponent
          },
          {
              path: 'course',
              component: CourseFormComponent
          },
          {
              path: 'course/:courseID',
              component: CourseFormComponent
          },
          {
              path: 'authors',
              component: AuthorsComponent,
          },
          {
              path: 'author',
              component: AuthorFormComponent,
          },
          {
              path: 'author/:authorID',
              component: AuthorFormComponent,
          },
          {
              path: '**',
              component: FourOhFourComponent,
          }
      ]),
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
