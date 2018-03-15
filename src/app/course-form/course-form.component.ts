import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AuthorsService } from '../authors/authors.service';
// import { CoursesService } from '../courses/courses.service';
import { CourseModel } from '../models/course-model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    // @Input('matInput');
    public course: CourseModel;
    private _authors = [];
    constructor(authorsService: AuthorsService) {
        this._authors = authorsService.getAuthors();
        this.course = new CourseModel();
        // this.course.releasedDate
    }
    get authors() {
        return this._authors;
    }

  ngOnInit() {
  }

}
