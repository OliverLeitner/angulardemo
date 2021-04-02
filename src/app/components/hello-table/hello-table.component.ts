import { Component, OnInit, Input/*, OnChanges, DoCheck*/ } from '@angular/core';

import {AnimeObject} from '../../shared/AnimeObject';
import {AniquotesService} from '../../services/aniquotes.service';

@Component({
    selector: 'hello-table',
    templateUrl: './hello-table.component.html',
    styleUrls: ['./hello-table.component.less']
})
export class HelloTableComponent implements OnInit/*, OnChanges, DoCheck*/ {

    @Input() dataArray!: AnimeObject[];
    //first: number = 0;
    //rows: number = 3;

    constructor(public anisvc: AniquotesService) {
    }

    ngOnInit(): void {
    }

    /*ngOnChanges(): void {
        console.log(this.dataArray)
    }

    ngDoCheck(): void {
        console.log(this.anisvc.animeDataArray.length);
        console.log(this.dataArray.length)
        console.log("checkster");
    }*/

    /*reset() {
      this.first = 0;
    }*/

    /*paginate(event: Event) {
        console.log(event)
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
    }*/

    /*next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    paginate(event: any) {
        this.first = event.first;
    }

    isLastPage(): boolean {
        return this.dataArray ? this.first === (this.dataArray.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.dataArray ? this.first === 0 : true;
    }*/
}
