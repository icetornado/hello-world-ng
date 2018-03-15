import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  private _authors = [
    {
      id: 1,
      name: 'Cat'
    },
    {
      id: 2,
      name: 'Dog'
    },
    {
      id: 3,
      name: 'Donkey'
    },
  ];
  constructor() { }
  getAuthors() {
    return this._authors;
  }
  getAuthor(id: number) {
    const author = this._authors.filter(function(item) {
      return (item.id === id);
    });
    if (author.length > 0) {
      return author[0];
    } else {
      return null;
    }
  }
}
