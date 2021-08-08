import { PlanningParticipant } from "../models/planning-participant";
import { PlanningTicketVote } from "../models/planning-ticket-vote";

export class PlanningPartitipantsMapper {
    static sortedPartitipantsRows(ticketVotes: PlanningTicketVote[] | undefined, participants: PlanningParticipant[]): PlanningParticipant[] {
        if (ticketVotes == null || ticketVotes == undefined || ticketVotes.length == 0) {
            return participants
        }
        var filteredVotes = ticketVotes.filter(x => x.selectedCard != null)
        var filteredGroupedVotes = PlanningPartitipantsMapper.groupBy(filteredVotes, "selectedCard")
        var meanCount = this.lastValue(filteredGroupedVotes.values())

        var participantsSorted: PlanningParticipant[] = []
        filteredGroupedVotes.forEach((values, key) => {
            if (values.length == meanCount) {
                values.forEach(value => {
                    var participant = participants.filter(participant => participant.participantId == value.participantId)[0]
                    participant.highlighted = false
                    participantsSorted.push(participant)
                })
            } else {
                values.forEach(value => {
                    var participant = participants.filter(participant => participant.participantId == value.participantId)[0]
                    participant.highlighted = value.selectedCard != null ? true : false
                    participantsSorted.push(participant)
                })
            }
        })

        ticketVotes.filter(x => x.selectedCard == null).forEach(value => {
            var participant = participants.filter(participant => participant.participantId == value.participantId)[0]
            participant.highlighted = false
            participantsSorted.push(participant)
        })

        return participantsSorted.sort((x, y) => {
            if (x.highlighted && y.highlighted) {
                return 1
            }
            if (x.highlighted && !y.highlighted) {
                return -1
            }
            return 0
        })
    }

    static groupBy = <T, K extends keyof T>(value: T[], key: K) =>
        value.reduce((acc, curr) => {
            if (acc.get(curr[key])) return acc;
            acc.set(curr[key], value.filter(elem => elem[key] === curr[key]));
            return acc;
        }, new Map<T[K], T[]>());

    static lastValue(valuesIterator: IterableIterator<PlanningTicketVote[]>): number {
        var arrayValues = Array.from(valuesIterator).map(x => x.length)
        return Math.max(...arrayValues)
    }
}
