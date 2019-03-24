import { Component, OnInit } from '@angular/core';
import { Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'finding viserion', 'the version with the night king', new Date(2019, 3, 4)),
    new Goal(2, 'buying a cow', 'to gain respect of peers', new Date(2019, 5, 7)),
    new Goal(3, 'going hiking', 'because it is fun', new Date(2019, 8 ,4)),
    new Goal(4, 'travelling often', 'because why not', new Date(2019, 2, 4)),
    new Goal(5, 'becoming a wakandan citizen', 'for the sake of it', new Date(2019, 3, 5)),
    new Goal(6, 'turning into a supervillain', 'megamind cant be alone', new Date(2019, 7, 9)),
  ]

  goalDelete(isComplete, Index){
    if(isComplete){
      let toDelete = confirm (`Are you sure you want to DELETE ${this.goals[Index].name}?`)
      if (toDelete){
        this.goals.splice(Index,1)
      }
    }
  }

  toggleDetails(Index){
    this.goals[Index].showDescription = !this.goals[Index].showDescription;
  }

    addNewGoal(goal){
      let goalLength= this.goals.length;
      goal.id = goalLength +1;
      goal.completeDate = new Date(goal.completeDate);
      this.goals.push(goal)
    }

  constructor() { }

  ngOnInit() {
  }

}
