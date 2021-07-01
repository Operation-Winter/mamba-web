import { PlanningCard } from "../planning-card.enum"

export class PlanningStartSessionMessage {
    sessionName: string
    availableCards: PlanningCard[]

    constructor(sessionName: string, availableCards: PlanningCard[]) {
        this.sessionName = sessionName
        this.availableCards = availableCards
    }
}
