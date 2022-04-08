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
    new Quotes (1,'Jared','Living','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2019,7,12),0,0),
    new Quotes (2,'Zimmer man','Hardwork','The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2019,7,14),0,0),
    new Quotes (3,'Dan J','Fact of Life','Life is what happens when you are busy making other plans.','John Lennon',new Date(2019,6,3),0,0),
  ]
  Info = true;
  constructor() { }

  ngOnInit(): void {
  }

}
