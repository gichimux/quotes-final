import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(0, 'lorem ipsum lorem', 'lorem ipsum', 'john doe',new Date(2019, 3, 4)),
    new Quote(0,'lorem ipsum lorem', 'lorem ipsum', 'jane doe',new Date(2019, 3, 4)),
    new Quote(0,'lorem ipsum lorem', 'lorem ipsum', 'june doe',new Date(2019, 3, 4)),
    new Quote(0,'lorem ipsum lorem', 'lorem ipsum', 'july doe',new Date(2019, 3, 4)),
    new Quote(0,'lorem ipsum lorem', 'lorem ipsum', 'jon doe',new Date(2019, 3, 4))

  ]

  quoteDelete(isComplete, Index){
    if(isComplete){
      let toDelete = confirm (`Are you sure you want to DELETE ${this.quotes[Index].postedQuote}?`)
      if (toDelete){
        this.quotes.splice(Index,1)
      }
    }
  }

  toggleDetails(Index){
    this.quotes[Index].showDetails = !this.quotes[Index].showDetails;
  }

   addNewQuote(quote){
      let quoteLength= this.quotes.length;
      quote.upVote = 0;
      quote.timePosted = new Date(quote.timePosted);
      this.quotes.push(quote)
    }

    likes(Index){
      this.quotes[Index].upVote += 1;

    }

    unLikes(Index){
      this.quotes[Index].upVote -= 1;

    }

  constructor() { }

  ngOnInit() {
  }

}
