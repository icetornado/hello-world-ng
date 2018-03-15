export class CoursesService {
  getCourses() {
    return [
      {
        name: 'Course 1A',
        authorID: 2,
        isOpen: true,
        student: 20,
        releasedDate: new Date(2016, 3, 1),
        price: 1991.89
      },
      {
        name: 'Course 2A',
        authorID: 3,
          isOpen: false,
          student: 40,
          releasedDate: new Date(2017, 13, 1),
          price: 9.89
      },
      {
        name: 'Course 3A',
        authorID: 1,
          isOpen: true,
          student: 30,
          releasedDate: new Date(2020, 10, 1),
          price: 1.89
      },
      {
        name: 'Grrrr',
      }
    ];
  }
}
