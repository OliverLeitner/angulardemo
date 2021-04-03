import { Component, OnDestroy } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, Subscription, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

import {AniquotesService} from '../../services/aniquotes.service';
import {AnimeObject} from '../../shared/AnimeObject';
import {ErrorObject} from '../../shared/ErrorObject';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnDestroy {
  aniquote: AnimeObject = new AnimeObject()
  subscription: Subscription = new Subscription()
  stopped: boolean = true
  errorObject: ErrorObject = new ErrorObject()

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
      //this.subscription?.unsubscribe()
      this.addQuote()
      setTimeout (() => {
          if (!this.stopped) this.startParsing()
      }, 36000); // max 100 requests per hour
  }

  // stop button
  stopParsing(): void {
      this.stopped = !!this.subscription // set state to stopped
      this.subscription?.unsubscribe() // close observable subscription
      this.errorObject = new ErrorObject() // cleanup error message
  }

  // fetch data
  addQuote(): void {
      let sobject: Observable<HttpResponse<AnimeObject>> = this.anisvc.getQuote // just an observable object
      this.subscription = sobject?.subscribe( // observe
          // retrieve data
          (resp: HttpResponse<AnimeObject>) => {
              this.pushQuotesIntoArray(this.aniquote = resp.body as AnimeObject/*{ ... resp.body as AnimeObject }*/)
          },
          // if something goes south
          (error: ErrorObject) => { this.errorObject = error },
          // on data received completed...
          () => { console.log("received data") }
      )
  }
}
