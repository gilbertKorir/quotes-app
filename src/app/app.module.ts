import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
=======
import { AppComponent } from './app.component';
import { MainQuotesComponent } from './main-quotes/main-quotes.component';
>>>>>>> ffdd058f93d75a366dc563c755f034041532d98c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    QuotesComponent,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    MainQuotesComponent,
  
  ],
  imports: [
    BrowserModule
>>>>>>> ffdd058f93d75a366dc563c755f034041532d98c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
