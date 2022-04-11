import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes'
// import { HighlightDirective } from '@angular/core'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 public quotes:Quotes[] = [
    new Quotes (1,'Jared','Living','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2019,7,12),0,0),
    new Quotes (2,'Zimmer man','Hardwork','The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2019,7,14),6,0),
    new Quotes (3,'Dan J','Facts of Life','Life is what happens when you are busy making other plans.','John Lennon',new Date(2019,6,3),0,0),
  ];

populars:Quotes[] = [
  new Quotes (1,'Jared','Living','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2019,7,12),20,6),
    new Quotes (2,'Zimmer man','Hardwork','The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2019,7,14),10,5),
]

  get myQuotes(){
    return this.quotes.sort((a,b)=>{
      return <any> new Date(b.datePosted) - <any> new Date(a.datePosted);
    });
  }
  // arr: number[] = this.populars.map(popu=>quote.likes)
  // highest = Math.max(...this.arr);

  addedQuote(quote: Quotes){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quotoDelete(isRead: boolean, index:number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    
    }
  }
  mostPopular(){
    this.populars.splice(0,this.populars.length);

    var largest=this.quotes[0].likes;
    var number=null;
    for (var i=0;i<this.quotes.length;i++){
      number=this.quotes[i].likes
  
      largest=Math.max(largest,number)
    }
    
    for (var i=0;i<this.quotes.length;i++){
      
      if(this.quotes[i].likes===largest){
        this.populars.push(this.quotes[i]);
      }
    }
  
  }
  index: number;
  // likes: number = 0;
  upvote(){
    // this.likes++;
    var up=this.quotes[this.index].likes+1;
    this.quotes[this.index].likes=up;
  }
  // dislikes: number = 0;
  downvote(){
    var down=this.quotes[this.index].likes+1;
    this.quotes[this.index].likes=down;
    // this.dislikes++;
  }
  displayInfo(index: number){
    this.quotes[index].Info = !this.quotes[index].Info;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
