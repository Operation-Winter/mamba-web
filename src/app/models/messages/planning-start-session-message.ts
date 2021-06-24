import { PlanningCard } from "../planning-card.enum"

export class PlanningStartSessionMessage {
    sessionName: String
    availableCards: PlanningCard[]

    constructor(sessionName: String, availableCards: PlanningCard[]) {
        this.sessionName = sessionName
        this.availableCards = availableCards
    }
}
