import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes!: Quotes;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvotes: number = 0;
  upvote(){
    this.upvotes++;
  }
  downvotes: number = 0;
  downvote(){
    this.downvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
