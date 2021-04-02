import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'; // http requests

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
//import {PaginatorModule} from 'primeng/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { BadrouteComponent } from './components/badroute/badroute.component';
import { HelloTableComponent } from './components/hello-table/hello-table.component';

import {AniquotesService} from './services/aniquotes.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BadrouteComponent,
    HelloTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    //PaginatorModule,
    AppRoutingModule
  ],
  providers: [
    AniquotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
