import { PlanningCard } from "../models/planning-card.enum"

export class PlanningCardMapper {
    cardName(planningCard: PlanningCard): string {
        var name: string = ""

        switch (planningCard) {
            case PlanningCard.zero:
                name = "Zero"
                break
            case PlanningCard.one:
                name = "One"
                break
            case PlanningCard.two:
                name = "Two"
                break
            case PlanningCard.three:
                name = "Three"
                break
            case PlanningCard.five:
                name = "Five"
                break
            case PlanningCard.eight:
                name = "Eight"
                break
            case PlanningCard.thirteen:
                name = "Thirteen"
                break
            case PlanningCard.twenty:
                name = "Twenty"
                break
            case PlanningCard.fourty:
                name = "Fourty"
                break
            case PlanningCard.hundred:
                name = "Hundred"
                break
            case PlanningCard.coffee:
                name = "Coffee"
                break
            case PlanningCard.question:
                name = "Question"
                break
        }
        return name
    }

    get allCases(): PlanningCard[] {
        return [
            PlanningCard.zero,
            PlanningCard.one,
            PlanningCard.two,
            PlanningCard.three,
            PlanningCard.five,
            PlanningCard.eight,
            PlanningCard.thirteen,
            PlanningCard.twenty,
            PlanningCard.fourty,
            PlanningCard.hundred,
            PlanningCard.coffee,
            PlanningCard.question
        ]
    }
}
