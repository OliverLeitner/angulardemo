import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import {AniquotesService} from '../../services/aniquotes.service';
import {AnimeObject} from '../../shared/AnimeObject';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnInit, OnDestroy {
  aniquote: AnimeObject = new AnimeObject()
  subscription: Subscription = new Subscription()
  stopped: boolean = true

  constructor(public anisvc: AniquotesService) {
  }

  ngOnInit(): void {
      console.log("component has initialized")
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
      console.log("after anime loading")
  }

  // keep em quotes for listing
  pushQuotesIntoArray(quote: AnimeObject): void {
      this.anisvc.animeDataArray.indexOf(quote) === -1 ?
        this.anisvc.animeDataArray.push(quote) :
        console.log("quote is already in array")

      console.log("quote inserted into array");
  }

  // start button
  startParsing(): void {
      if (this.subscription)
        this.subscription.unsubscribe()
      this.clickMe()
      setTimeout (() => {
          if (!this.stopped) this.startParsing()
      }, 3000);
  }

  // stop button
  stopParsing(): void {
      if (this.subscription)
        this.subscription.unsubscribe()
      this.stopped = true
  }

  // fetch data
  clickMe(): void {
      if (!this.stopped) {
          let sobject = this.anisvc.getQuote; // new observable
          this.subscription = sobject.subscribe(
              (data: AnimeObject) => {
                  this.aniquote = {
                      anime: data.anime,
                      character:  data.character,
                      quote: data.quote
                  }
                  this.pushQuotesIntoArray(this.aniquote)
              }
          );
      }
  }
}
