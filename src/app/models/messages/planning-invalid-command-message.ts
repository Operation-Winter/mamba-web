export class PlanningInvalidCommandMessage {
    code: string
    description: string
    
    constructor(code: string, description: string) {
        this.code = code
        this.description = description
    }
}
