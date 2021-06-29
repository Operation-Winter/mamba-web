import { PlanningCard } from "../planning-card.enum"

export class PlanningVoteMessage {
    selectedCard: PlanningCard
    
    constructor(selectedCard: PlanningCard) {
        this.selectedCard = selectedCard
    }
}
