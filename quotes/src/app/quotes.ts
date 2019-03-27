export class Quote {
  public showDetails: boolean;
  constructor(public upVote: number = 0, public postedQuote: string, public authorName: string, public userName: string, public timePosted: Date){
      this.showDetails = false
  }
}
