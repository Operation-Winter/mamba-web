import { PlanningAddTicketMessage } from "../models/messages/planning-add-ticket-message";
import { PlanningRemoveParticipantMessage } from "../models/messages/planning-remove-participant-message";
import { PlanningSkipVoteMessage } from "../models/messages/planning-skip-vote-message";
import { PlanningStartSessionMessage } from "../models/messages/planning-start-session-message";
import { PlanningCard } from "../models/planning-card.enum";
import { PlanningCommandHostSend } from "../models/host/planning-command-host-send";
import { PlanningCommandHostSendType } from "../models/host/planning-command-host-send-type.enum";
import { PlanningCommandHostReceive } from "../models/host/planning-command-host-receive";
import { PlanningCommandHostReceiveType } from "../models/host/planning-command-host-receive-type.enum";
import { PlanningSessionStateMessage } from "../models/messages/planning-session-state-message";
import { PlanningInvalidCommandMessage } from "../models/messages/planning-invalid-command-message";

export class PlanningHostCommandMapper {
    mapStartSessionCommand(uuid: string, sessionName: string, availableCards: PlanningCard[]): PlanningCommandHostSend {
        var message = new PlanningStartSessionMessage(sessionName, availableCards)
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.startSession, message)
    }

    mapAddTicketCommand(uuid: string, title: string, description: string): PlanningCommandHostSend {
        var message = new PlanningAddTicketMessage(title, description)
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.addTicket, message)
    }

    mapSkipVoteCommand(uuid: string, participantId: string): PlanningCommandHostSend {
        var message = new PlanningSkipVoteMessage(participantId)
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.skipVote, message)
    }

    mapRevoteCommand(uuid: string): PlanningCommandHostSend {
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.revote, null)
    }

    mapEndSessionCommand(uuid: string): PlanningCommandHostSend {
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.endSession, null)
    }

    mapFinishVotingCommand(uuid: string): PlanningCommandHostSend {
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.finishVoting, null)
    }

    mapRemoveParticipantCommand(uuid: string, participantId: string): PlanningCommandHostSend {
        var message = new PlanningRemoveParticipantMessage(participantId)
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.removeParticipant, message)
    }

    mapReconnectCommand(uuid: string): PlanningCommandHostSend {
        return new PlanningCommandHostSend(uuid, PlanningCommandHostSendType.reconnect, null)
    }

    mapIncomingCommand(command: any): PlanningCommandHostReceive {
        var type = command.type as PlanningCommandHostReceiveType
        var message: any = null

        switch (type) {
            case PlanningCommandHostReceiveType.noneState:
            case PlanningCommandHostReceiveType.votingState:
            case PlanningCommandHostReceiveType.finishedState:
                message = command.message as PlanningSessionStateMessage
                break
            case PlanningCommandHostReceiveType.invalidCommand:
                message = command.message as PlanningInvalidCommandMessage
                break
        }

        return new PlanningCommandHostReceive(type, message)
    }
}