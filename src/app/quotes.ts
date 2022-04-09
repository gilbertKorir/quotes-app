export class Quotes {
  [x: string]: any;
    Info!: boolean;
  completeDate: Date;
    constructor(public id:number,public name:string,public title:string,public quote:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
        this.Info=false;
      }
    
}
