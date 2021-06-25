import { PlanningCommandHostSendType } from "./planning-command-host-send-type.enum";
import { PlanningCommandSend } from "../planning-command-send";

export class PlanningCommandHostSend implements PlanningCommandSend  {
    uuid: string
    type: PlanningCommandHostSendType
    message: any
    
    constructor(uuid: string, type: PlanningCommandHostSendType, message: any) {
        this.uuid = uuid
        this.type = type
        this.message = message
    }
}
