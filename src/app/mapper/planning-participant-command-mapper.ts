import { PlanningInvalidCommandMessage } from "../models/messages/planning-invalid-command-message"
import { PlanningJoinSessionMessage } from "../models/messages/planning-join-session-message"
import { PlanningSessionStateMessage } from "../models/messages/planning-session-state-message"
import { PlanningCommandParticipantReceive } from "../models/participant/planning-command-participant-receive"
import { PlanningCommandParticipantReceiveType } from "../models/participant/planning-command-participant-receive-type.enum"
import { PlanningCommandParticipantSend } from "../models/participant/planning-command-participant-send"
import { PlanningCommandParticipantSendType } from "../models/participant/planning-command-participant-send-type.enum"
import { PlanningCard } from "../models/planning-card.enum"

export class PlanningParticipantCommandMapper {
    mapJoinSessionCommand(uuid: string, sessionCode: string, participantName: string): PlanningCommandParticipantSend {
        var message = new PlanningJoinSessionMessage(sessionCode, participantName)
        return new PlanningCommandParticipantSend(uuid, PlanningCommandParticipantSendType.joinSession, message)
    }

    mapIncomingCommand(command: any): PlanningCommandParticipantReceive {
        var type = command.type as PlanningCommandParticipantReceiveType
        var message: any = null

        switch (type) {
            case PlanningCommandParticipantReceiveType.noneState:
            case PlanningCommandParticipantReceiveType.votingState:
            case PlanningCommandParticipantReceiveType.finishedState:
                message = command.message as PlanningSessionStateMessage
                break
            case PlanningCommandParticipantReceiveType.invalidCommand:
                message = command.message as PlanningInvalidCommandMessage
                break
            case PlanningCommandParticipantReceiveType.invalidSession:
                break
            case PlanningCommandParticipantReceiveType.removeParticipant:
                break
            case PlanningCommandParticipantReceiveType.endSession:
                break
        }

        return new PlanningCommandParticipantReceive(type, message)
    }
}
