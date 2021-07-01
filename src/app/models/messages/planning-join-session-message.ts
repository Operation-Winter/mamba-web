export class PlanningJoinSessionMessage {
    sessionCode: string
    participantName: string
    
    constructor(sessionCode: string, participantName: string) {
        this.sessionCode = sessionCode
        this.participantName = participantName
    }
}
