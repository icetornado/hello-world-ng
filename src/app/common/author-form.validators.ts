import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthorsService } from '../authors/authors.service';
import {resolve} from 'url';

export class AuthorFormValidators {
    static cannotContainNumber(control: AbstractControl): ValidationErrors | null {
        if (control.value as string) {
            const re = /^[A-Za-z\s]+$/;
            if (!re.test(control.value)) {
                return { cannotContainNumber: true};
            }
        }
        return null;
    }
    static shouldBeUnique (control: AbstractControl): Promise <ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.value as string) {
                setTimeout(() => {
                    const authorService = new AuthorsService();
                    const authors = authorService.getAuthors()
                    // console.log('author here', authors);
                    const match = authors.filter(a => a.name.toLowerCase() === control.value.toLowerCase());
                    // console.log('matched', match);
                    if (match.length > 0) {
                        console.log('found something');
                        resolve({ shouldBeUnique: true});
                    } else {
                        resolve(null);
                    }
                }, 500);
            } else {
                resolve(null);
            }
            // resolve(null);
        });
    }
}
