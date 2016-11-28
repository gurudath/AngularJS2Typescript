import { Component , OnInit } from '@angular/core';
import {WelcomeComponent} from './home/welcome.component';
import {CourseComponent} from './course/course.component';
import {AuthorComponent} from './author/author.component';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { RouteConfig } from '@angular/router-deprecated';


@Component({
    selector: 'my-app',
    template: `<div class="container"><header>
                <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/home']">Home</a></li>
                        <li><a [routerLink]="['/author']">Author</a></li>
                        <li><a [routerLink]="['/course']">Course</a></li>
                    </ul>
                    </div>
                </div>
                </nav>
                </header><div class="manage-main"><router-outlet></router-outlet>
        </div></div>`,
  //   template: "<h1>Gurudath BN {{PageTitle}}</h1> <bs-welcome></bs-welcome><course></course><author></author>,
   // directives:[WelcomeComponent]
   providers: [ROUTER_PROVIDERS], 
    directives:[CourseComponent,AuthorComponent,WelcomeComponent,ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/home',      component: WelcomeComponent},
  {path: '/author',      component: AuthorComponent},
  {path: '/course',      component: CourseComponent}
])

export class AppComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/home']);
    }
    
    public PageTitle:string = 'Working With Angular JS';
}
