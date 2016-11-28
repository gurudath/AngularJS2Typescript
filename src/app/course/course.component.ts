import { Component } from '@angular/core';
import { CourseService } from './course.service';
import {AutoGrowDirective} from './../directive/auto-grow.directive'

@Component({
    selector: "course",
    template: `
       <h2>Course List by {{author}}</h2>
       <input type="text" autoGrow />
       <ul>
         <li *ngFor="#course of courses">
           {{course}}
         </li>
       </ul>
    `,
    providers: [CourseService],
    directives:[AutoGrowDirective]
})

export class CourseComponent {

    author: string = 'Vinay BN';
    //courses = ['Science','Kannada','Maths','English'];
    courses;

    constructor(courseService: CourseService) {       
       this.courses = courseService.getCourse();
    }

}
