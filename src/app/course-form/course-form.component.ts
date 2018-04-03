import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { NgForm} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AuthorsService } from '../authors/authors.service';
import { CoursesService } from '../courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import { CourseModel} from '../models/course-model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit, OnDestroy {
    // @Input('matInput');
    public course: any;
    public courseID: number;
    private _authors = [];
    private sub: any;
    public isEdit: boolean;
    constructor(private route: ActivatedRoute) {
        const authorsService = new AuthorsService();
        const coursesService = new CoursesService();
        this._authors = authorsService.getAuthors();
        console.log(this.route.params);
        this.sub = this.route.params.subscribe(params => {
            this.courseID = +params['courseID']; //
            // In a real app: dispatch action to load the details here.
            this.course = coursesService.getCourse(this.courseID);
            if (this.course) {
                this.isEdit = true;
                try {
                    this.course.releasedDateAsDate = {
                        month: this.course.releasedDate.getMonth() + 1,
                        day: this.course.releasedDate.getDay(),
                        year: this.course.releasedDate.getFullYear(),
                    };
                } catch (error) {
                    const now = new Date();
                    this.course.releasedDateAsDate = {
                        month: now.getMonth() + 1,
                        day: now.getDay(),
                        year: now.getFullYear(),
                    };
                }
            } else {
                this.isEdit = false;
                this.course = new CourseModel();
                const now = new Date();
                this.course.releasedDateAsDate = {
                    month: now.getMonth() + 1,
                    day: now.getDay(),
                    year: now.getFullYear(),
                };
            }
            console.log('course', this.course);
        });
    }
    get authors() {
        return this._authors;
    }

    ngOnInit() {
    }
    ngOnDestroy() {
        console.log('on destroy');
        this.sub.unsubscribe();
    }
    /* onAddCourse() {
        console.log('this add button click');
        const authorService = new AuthorsService();
        let author = authorService.getAuthor(this.currentCourse.authorID);
        console.log('the author is ', author);
        this.currentCourse.author = author;
        this.courses.push(this.currentCourse);
        event.stopPropagation();
    } */
    onSubmit(f: NgForm) {
        console.log(f.value);  // { first: '', last: '' }
        console.log(f.valid);  // false
    }
}
