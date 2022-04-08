import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainQuotesComponent } from './main-quotes/main-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainQuotesComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
