import { PlanningChangeNameMessage } from "../models/messages/planning-change-name-message"
import { PlanningInvalidCommandMessage } from "../models/messages/planning-invalid-command-message"
import { PlanningJoinSessionMessage } from "../models/messages/planning-join-session-message"
import { PlanningSessionStateMessage } from "../models/messages/planning-session-state-message"
import { PlanningVoteMessage } from "../models/messages/planning-vote-message"
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

    mapLeaveSessionCommand(uuid: string): PlanningCommandParticipantSend {
        return new PlanningCommandParticipantSend(uuid, PlanningCommandParticipantSendType.leaveSession, null)
    }

    mapVoteCommand(uuid: string, selectedCard: PlanningCard): PlanningCommandParticipantSend {
        var message = new PlanningVoteMessage(selectedCard)
        return new PlanningCommandParticipantSend(uuid, PlanningCommandParticipantSendType.vote, message)
    }

    mapReconnectCommand(uuid: string): PlanningCommandParticipantSend {
        return new PlanningCommandParticipantSend(uuid, PlanningCommandParticipantSendType.reconnect, null)
    }

    mapChangeNameCommand(uuid: string, name: string): PlanningCommandParticipantSend {
        var message = new PlanningChangeNameMessage(name)
        return new PlanningCommandParticipantSend(uuid, PlanningCommandParticipantSendType.changeName, message)
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
            default:
                break
        }

        return new PlanningCommandParticipantReceive(type, message)
    }
}
