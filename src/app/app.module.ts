import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*Form Controls*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BiodataformComponent } from './biodataform/biodataform.component';
import { BiodataService } from './biodataform/biodata.service';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  declarations: [
    AppComponent,
    BiodataformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BiodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
