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
}
