import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*Form Controls*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BiodataformComponent } from './biodataform/biodataform.component';
import { BiodataService } from './biodataform/biodata.service';

import { HttpErrorInterceptor } from './http-error.interceptor';
@Injectable({
  providedIn: 'root',
})
@NgModule({
  declarations: [AppComponent, BiodataformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BiodataService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
