export class PlanningParticipant {
    participantId: string
    name: string
    highlighted: boolean = false
    
    constructor(participantId: string, name: string) {
        this.participantId = participantId
        this.name = name
    }
}
