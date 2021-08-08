import { PlanningCard } from "../planning-card.enum"

export class PlanningStartSessionMessage {
    sessionName: string
    autoCompleteVoting: boolean
    availableCards: PlanningCard[]

    constructor(sessionName: string, autoCompleteVoting: boolean, availableCards: PlanningCard[]) {
        this.sessionName = sessionName
        this.autoCompleteVoting = autoCompleteVoting
        this.availableCards = availableCards
    }
}
