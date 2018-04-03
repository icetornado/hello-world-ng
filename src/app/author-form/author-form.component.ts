import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthorFormValidators } from '../common/author-form.validators';
import { AuthorFormService } from './author-form.service';
import { AuthorModel } from '../models/author-model';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
    public authorForm = new FormGroup({
        authorName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            AuthorFormValidators.cannotContainNumber,
        ], [ AuthorFormValidators.shouldBeUnique ]),
    });
    constructor() { }
    ngOnInit() {
    }
    get authorName() {
        return this.authorForm.get('authorName');
    }
    doSubmit() {
        const formService = new AuthorFormService();
        // let author = new AuthorModel();
        console.log('form value', this.authorForm.value);
        formService.addAuthor(this.authorForm.value);
        // console.log(this.authorForm.get('authorName'));
        /* author.id = 999;
        formService.addAuthor(author);*/
    }
}
