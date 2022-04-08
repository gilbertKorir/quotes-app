import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-main-quotes',
  templateUrl: './main-quotes.component.html',
  styleUrls: ['./main-quotes.component.css']
})
export class MainQuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes:Quotes[] = [
    new Quotes (1,'Charles','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12),0,0),
    new Quotes (2,'Wendy','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2019,7,14),0,0),
    new Quotes (3,'Mikey','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3),0,0),
  ]
  Info = true;
  constructor() { }

  ngOnInit(): void {
  }

}
