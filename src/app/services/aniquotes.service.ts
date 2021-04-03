import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { AnimeObject } from '../shared/AnimeObject'

@Injectable(/*{
    providedIn: 'root'
}*/)
export class AniquotesService {
    protected animeData: AnimeObject = new AnimeObject()
    public animeDataArray: AnimeObject[] = []

    constructor(private http: HttpClient) {}

    get getQuote(): Observable<Object> {
        let observableObject = this.http.get<AnimeObject>('https://animechan.vercel.app/api/random')
        return observableObject
    }
}
