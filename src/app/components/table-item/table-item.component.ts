import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-item',
    templateUrl: './table-item.component.html',
    styleUrls: ['./table-item.component.css']
})
export class TableItemComponent {
    @Input() place: string = "Location";
    @Input() name: string = "Reported By";
    @Input() time: string = "Time Reported";
    @Input() status: string = "Status";

    constructor() {}


}
