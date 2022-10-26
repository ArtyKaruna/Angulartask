import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';

import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs';
import { CommonService } from 'src/app/common.service';
@Injectable()
export class BiodataService {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public commonService: CommonService
  ) {}

  getUserlist() {
    return this.http
      .get(environment.BaseURI + 'api/users')
      .pipe(catchError(this.handleError));
  }
  DeleteUser(Id: string) {
    return this.http
      .delete(environment.BaseURI + `api/users/${Id}`)
      .pipe(catchError(this.handleError));
  }
  SaveForm(formData: any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http
      .post(environment.BaseURI + 'api/users', formData, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }
  getUsersById(Id: string) {
    return this.http
      .get(environment.BaseURI + `api/users/${Id}`)
      .pipe(catchError(this.handleError));
  }
  updateUsers(Id: string, formData: any) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http
      .put(environment.BaseURI + `api/users/${Id}`, formData, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
