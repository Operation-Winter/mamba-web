import { Component, Input, OnInit } from '@angular/core';
import { PlanningCardMapper } from 'src/app/mapper/planning-card-mapper';
import { PlanningPartitipantsMapper } from 'src/app/mapper/planning-partitipants-mapper';
import { PlanningTicketVote } from 'src/app/models/planning-ticket-vote';
import { PlanningVotingResult } from 'src/app/models/planning-voting-result';

@Component({
  selector: 'app-planning-voting-results-card',
  templateUrl: './planning-voting-results-card.component.html',
  styleUrls: ['./planning-voting-results-card.component.scss']
})
export class PlanningVotingResultsCardComponent implements OnInit {
  @Input() votes: PlanningTicketVote[] | undefined = []

  constructor() { }

  ngOnInit() {
  }

  get votesGrouped(): PlanningVotingResult[] {
    if (this.votes == undefined) {
      return []
    }
    var tempVotes = this.votes.filter(x => x.selectedCard != null)
    var totalVotes = tempVotes.length
    var groupedVotes = PlanningPartitipantsMapper.groupBy(tempVotes, "selectedCard")
    var votes: PlanningVotingResult[] = []

    groupedVotes.forEach((values, key) => {
      var title = new PlanningCardMapper().cardValue(key)
      var ratio = values.length / totalVotes
      votes.push(new PlanningVotingResult(title, ratio * 100, ratio))
    })
    var sortedVotes = votes.sort((x, y) => {
      return x.widthPercentage < y.widthPercentage ? 1 : -1
    })
    var transparency = 1
    sortedVotes.forEach( vote => {
      var tempTransparency = vote.transparency
      vote.transparency = transparency
      transparency = transparency - tempTransparency
    })

    return sortedVotes
  }
}
