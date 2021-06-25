import { PlanningCard } from "./planning-card.enum"

export class PlanningTicketVote {
    participantId: string
    selectedCard: PlanningCard

    get skipped(): boolean {
        return this.selectedCard == null
    }
    
    constructor(participantId: string, selectedCard: PlanningCard) {
        this.participantId = participantId
        this.selectedCard = selectedCard
    }
}
