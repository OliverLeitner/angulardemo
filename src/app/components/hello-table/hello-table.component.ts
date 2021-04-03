import { Component, Input } from '@angular/core';

import {AnimeObject} from '../../shared/AnimeObject';

@Component({
    selector: 'hello-table',
    templateUrl: './hello-table.component.html',
    styleUrls: ['./hello-table.component.less']
})
export class HelloTableComponent {

    @Input() dataArray!: AnimeObject[];

    constructor() {
    }
}
