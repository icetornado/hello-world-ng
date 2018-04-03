import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
    private authorService: AuthorsService;
    public authors: any;
    constructor() {
        this.authorService = new AuthorsService();
        this.authors = this.authorService.getAuthors();
    }
    ngOnInit() {
    }

}
