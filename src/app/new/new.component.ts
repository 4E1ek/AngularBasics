import { Component } from "@angular/core";

@Component({
    selector: 'app-new',
    standalone: true,
    template: '<p>{{componentTitle}}</p>',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent {
    componentTitle = 'this is a new component';
}