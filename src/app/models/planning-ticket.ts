import { PlanningTicketVote } from "./planning-ticket-vote"

export class PlanningTicket {
    title: string
    description: string
    ticketVotes: PlanningTicketVote[]
    
    constructor(title: string, description: string, ticketVotes: PlanningTicketVote[]) {
        this.title = title
        this.description = description
        this.ticketVotes = ticketVotes
    }

    removeVotes(participantId: string) {
        this.ticketVotes = this.ticketVotes.filter(item => item.participantId == participantId)
    }
    
    removeVotesAll() {
        this.ticketVotes = []
    }
    
    add(vote: PlanningTicketVote) {
        this.ticketVotes.push(vote)
    }
}
