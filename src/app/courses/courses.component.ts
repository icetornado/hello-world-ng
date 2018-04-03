import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { AuthorsService } from '../authors/authors.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private _title = 'List of Courses';
  public courses = [];
  public currentCourse = {
      name: '',
      authorID: 0,
      status: '',
      isActive: false,
      author: null,
  };
  private _authors = [];
  constructor(cousesService: CoursesService, authorsService: AuthorsService) {
    // const service = new CoursesService();
    this.courses = cousesService.getCourses();
    this.courses.map(function(item) {
        // noinspection JSAnnotator
        item.author = authorsService.getAuthor(item.authorID);
        // item.isActive = item.status === 'Open' ?  true : false;
    });
    this._authors = authorsService.getAuthors();
  }

  ngOnInit() {}
  get title() {
    return this._title;
  }
  set title(val) {
    this._title = val;
  }
  get author() {
      return this._authors;
  }
  onAdd(course, event) {
    console.log('this button click', course);
    console.log('kind of event', event);
    event.stopPropagation();
  }
  onAddCourse() {
      console.log('this add button click', this.currentCourse);
      const authorService = new AuthorsService();
      let author = authorService.getAuthor(this.currentCourse.authorID);
      console.log('the author is ', author);
      this.currentCourse.author = author;
      this.courses.push(this.currentCourse);
      event.stopPropagation();
  }
}
