export class CoursesService {
  getCourses() {
    return [
      {
        name: 'Course 1A',
        authorID: 2,
        status: 'Open',
      },
      {
        name: 'Course 2A',
        authorID: 3,
        status: 'Closed'
      },
      {
        name: 'Course 3A',
        authorID: 1,
        status: 'Open'
      },
      {
        name: 'Grrrr',
      }
    ];
  }
}
