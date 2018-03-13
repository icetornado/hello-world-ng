import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';
import {AuthorsService} from '../authors/authors.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private _title = 'List of Courses';
  public courses = [];
  public authors = [];
  constructor(cousesService: CoursesService, authorsService: AuthorsService) {
    // const service = new CoursesService();
    this.courses = cousesService.getCourses();
    this.courses.map(function(item) {
      // each item here
      item.author = authorsService.getAuthor(item.authorID);
      item.isActive = item.status === 'Open' ?  true : false;
    });
  }

  ngOnInit() {}
  get title() {
    return this._title;
  }
  set title(val) {
    this._title = val;
  }
  onAdd(course, event) {
    console.log('this button click', course);
    console.log('kind of event', event);
    event.stopPropagation();
  }
}
