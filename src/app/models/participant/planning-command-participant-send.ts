import { PlanningCommandSend } from "../planning-command-send";
import { PlanningCommandParticipantSendType } from "./planning-command-participant-send-type.enum";

export class PlanningCommandParticipantSend implements PlanningCommandSend {
    uuid: string
    type: PlanningCommandParticipantSendType
    message: any
    
    constructor(uuid: string, type: PlanningCommandParticipantSendType, message: any) {
        this.uuid = uuid
        this.type = type
        this.message = message
    }
}
