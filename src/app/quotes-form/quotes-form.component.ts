import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quotes } from '../quotes';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoteGiven = new Quotes(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quotes>();
  quotesForm: any;

  addQuote(){
this.add.emit(this.quoteGiven);
this.quoteGiven = new Quotes(0,"","","","",new Date(),0,0);
  }
  constructor() { }

  // ngOnInit() {}
  ngOnInit(): void {
    // this.quotesForm = new FormGroup({
    //   name: new FormControl(this.quoted.name, [
    //     Validators.required
    //   ])
    // });
  
  }

}
