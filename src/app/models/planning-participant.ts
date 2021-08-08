export class PlanningParticipant {
    participantId: string
    name: string
    connected: boolean
    highlighted: boolean = false
    
    constructor(participantId: string, name: string, connected: boolean) {
        this.participantId = participantId
        this.name = name
        this.connected = connected
    }
}
