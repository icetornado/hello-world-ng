import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    private _courses = [
        {
            name: 'Course 1A',
            id: 1,
            authorID: 2,
            isOpen: true,
            student: 20,
            releasedDate: new Date(2016, 3, 1),
            price: 1991.89,
            isActive: true,
        },
        {
            name: 'Course 2A',
            id: 2,
            authorID: 3,
            isOpen: false,
            student: 40,
            releasedDate: new Date(2017, 13, 1),
            price: 9.89,
            isActive: true,
        },
        {
            name: 'Course 3A',
            id: 3,
            authorID: 1,
            isOpen: true,
            student: 30,
            releasedDate: new Date(2020, 10, 1),
            price: 1.89,
            isActive: true,
        },
        {
            name: 'Grrrr',
            id: 4,
            isActive: false,
        }
    ];
    constructor() { }
    getCourses() {
        return this._courses;
    }
    getCourse(id: number) {
        const course = this._courses.filter(function(item) {
            return (item.id === id);
        });
        if (course.length > 0) {
            return course[0];
        } else {
            return null;
        }
    }
}
