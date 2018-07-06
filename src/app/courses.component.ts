import { Component } from "@angular/core";


@Component({
    selector:'courses',
    //template with string concatenation
    // template:'<h2>{{"Title is:" + title}}</h2>'
    //template with method calling
    //template:'<h2>{{returnTitle()}}</h2>'
    //template with ngFor directive
    template: `
    <h2>{{returnTitle()}}</h2>
    <ul>
        <li *ngFor = "let course of courses">
            {{course}}
        </li>
    </ul>
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses = ["course1","course2","course3"];
    //method for "template with method calling"
    returnTitle(){
        return this.title;
    }
    
}