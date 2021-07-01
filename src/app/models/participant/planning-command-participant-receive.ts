import { PlanningCommandReceive } from "../planning-command-receive";
import { PlanningCommandParticipantReceiveType } from "./planning-command-participant-receive-type.enum";

export class PlanningCommandParticipantReceive implements PlanningCommandReceive {
    type: PlanningCommandParticipantReceiveType
    message: any
    
    constructor(type: PlanningCommandParticipantReceiveType, message: any) {
        this.type = type
        this.message = message
    }
}
