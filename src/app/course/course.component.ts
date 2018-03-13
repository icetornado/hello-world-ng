import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // @Input() courseName: string;
  private _title: string;
  constructor() {
    // this._title = course;
  }

  ngOnInit() {
  }
  set title(val) {
    this._title = val;
  }
  get title() {
    return this._title;
  }
}
