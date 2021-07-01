import { PlanningCard } from "../planning-card.enum"
import { PlanningParticipant } from "../planning-participant"
import { PlanningTicket } from "../planning-ticket"

export class PlanningSessionStateMessage {
    sessionCode: string
    sessionName: string
    availableCards: PlanningCard[]
    participants: PlanningParticipant[]
    ticket: PlanningTicket
    
    constructor(sessionCode: string, sessionName: string, availableCards: PlanningCard[], participants: PlanningParticipant[], ticket: PlanningTicket) {
        this.sessionCode = sessionCode
        this.sessionName = sessionName
        this.availableCards = availableCards
        this.participants = participants
        this.ticket = ticket
    }
}
