import { PlanningCommandHostReceiveType } from "./planning-command-host-receive-type.enum"
import { PlanningCommandReceive } from "../planning-command-receive"

export class PlanningCommandHostReceive implements PlanningCommandReceive  {
    type: PlanningCommandHostReceiveType
    message: any
    
    constructor(type: PlanningCommandHostReceiveType, message: any) {
        this.type = type
        this.message = message
    }
}
