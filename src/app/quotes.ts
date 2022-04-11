export class Quotes {
id:number;
name:string;
title:string;
 quote:string; 
 author:string;
datePosted:Date; 
likes:number;
dislikes:number;

    Info!: boolean;
  completeDate: Date;
  static likes: any;
    constructor(id:number, name:string, title:string,   quote:string, author:string,  datePosted: Date, likes:number, dislikes:number){
        this.Info=false;
        this.id = id
        this.title = title
        this.name = name
        this.quote = quote
        this.datePosted = datePosted
        this.author = author
        this.likes = likes
        this.dislikes= dislikes
      }
    
}
