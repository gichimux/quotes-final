export class Quotes {
  public showDetails: boolean;
  constructor(public upVote: number, public downVote: number, public name: string, public details: string, public timePosted: Date){
      this.showDetails = false
  }
}
