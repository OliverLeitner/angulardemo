import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AnimeObject } from '../shared/AnimeObject'

@Injectable(/*{
    providedIn: 'root'
}*/)
export class AniquotesService {
    public animeDataArray: AnimeObject[] = []

    constructor(private http: HttpClient) {}

    get getQuote(): Observable<Object> {
        return this.http.get<AnimeObject>('http://angular.localnet:3010/random')
    }
}
