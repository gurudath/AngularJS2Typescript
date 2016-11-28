import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
    selector: "author",
    template: `
       <h2>AuthorList </h2>
       <ul>
         <li *ngFor="#author of authors">
           {{author}}
         </li>
       </ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent {

    author: string = 'Vinay BN';
    //courses = ['Science','Kannada','Maths','English'];
    authors;

    constructor(authorService: AuthorService) {       
       this.authors = authorService.getAuthor();
    }

}
