import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AnimeObject } from '../shared/AnimeObject'
import { ErrorObject } from '../shared/ErrorObject'

@Injectable({
    providedIn: 'root'
})
export class AniquotesService {
    public animeDataArray: AnimeObject[] = []

    constructor(private http: HttpClient) {}

    get getQuote(): Observable<HttpResponse<AnimeObject>> {
        return this.http.get<AnimeObject>('https://animechan.vercel.app/api/random', { observe: 'response' })
        .pipe(
            catchError(this.handleError)
        );
    }

    // Error handler TODO: shorten me (external service away from the anigrabber)
    private handleError(error: HttpErrorResponse) {
        let superLocalErrorMessage = new ErrorObject()
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            superLocalErrorMessage = error.error
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            superLocalErrorMessage = error
            superLocalErrorMessage.message = 'something went wrong, try again later' //error.error
        }
        // Return an observable with a user-facing error message.
        return throwError(superLocalErrorMessage);
    }
}
