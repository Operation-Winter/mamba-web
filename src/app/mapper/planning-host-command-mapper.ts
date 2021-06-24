import { PlanningStartSessionMessage } from "../models/messages/planning-start-session-message";
import { PlanningCard } from "../models/planning-card.enum";
import { PlanningCommandHostSend } from "../models/planning-command-host-send";
import { PlanningCommandHostSendType } from "../models/planning-command-host-send-type.enum";

export class PlanningHostCommandMapper {
    mapStartSessionCommand(uuid: string, sessionName: String, availableCards: PlanningCard[]): PlanningCommandHostSend {
        var message = new PlanningStartSessionMessage(sessionName, availableCards)
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.startSession, message)
    }
}