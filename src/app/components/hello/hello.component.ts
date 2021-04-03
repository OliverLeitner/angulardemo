import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import {AniquotesService} from '../../services/aniquotes.service';
import {AnimeObject} from '../../shared/AnimeObject';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnDestroy {
  aniquote: AnimeObject = new AnimeObject()
  subscription: Subscription = new Subscription()
  stopped: boolean = true

  constructor(public anisvc: AniquotesService) {
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
      console.log("after leaving the app, we cleanup")
  }

  // keep em quotes for listing
  pushQuotesIntoArray(quote: AnimeObject): void {
      this.anisvc.animeDataArray?.indexOf(quote) === -1 ?
        this.anisvc.animeDataArray?.push(quote) :
        console.log("quote is already in array")

      console.log("quote inserted into array");
  }

  // start button
  startParsing(): void {
      this.subscription?.unsubscribe()
      this.addQuote()
      setTimeout (() => {
          if (!this.stopped) this.startParsing()
      }, 36000); // max 100 requests per hour
  }

  // stop button
  stopParsing(): void {
      this.stopped = !!this.subscription
      this.subscription?.unsubscribe()
  }

  // fetch data
  addQuote(): void {
      let sobject = this.anisvc.getQuote;
      this.subscription = sobject?.subscribe(
          (data: AnimeObject) => {
              this.pushQuotesIntoArray(this.aniquote = data)
          }
      );
  }
}
