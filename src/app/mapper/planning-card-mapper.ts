import { isDevMode } from "@angular/core"
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

    cardValue(planningCard: PlanningCard): string {
        var value: string = ""

        switch (planningCard) {
            case PlanningCard.zero:
                value = "0"
                break
            case PlanningCard.one:
                value = "1"
                break
            case PlanningCard.two:
                value = "2"
                break
            case PlanningCard.three:
                value = "3"
                break
            case PlanningCard.five:
                value = "5"
                break
            case PlanningCard.eight:
                value = "8"
                break
            case PlanningCard.thirteen:
                value = "13"
                break
            case PlanningCard.twenty:
                value = "20"
                break
            case PlanningCard.fourty:
                value = "40"
                break
            case PlanningCard.hundred:
                value = "100"
                break
            case PlanningCard.coffee:
                value = "Coffee"
                break
            case PlanningCard.question:
                value = "?"
                break
        }
        return value
    }

    imageAssetPath(planningCard: PlanningCard): string {
        var value: string = ""

        switch (planningCard) {
            case PlanningCard.zero:
                value += "/assets/cards/Card 0.png"
                break
            case PlanningCard.one:
                value = "/assets/cards/Card 1.png"
                break
            case PlanningCard.two:
                value = "/assets/cards/Card 2.png"
                break
            case PlanningCard.three:
                value = "/assets/cards/Card 3.png"
                break
            case PlanningCard.five:
                value = "/assets/cards/Card 5.png"
                break
            case PlanningCard.eight:
                value = "/assets/cards/Card 8.png"
                break
            case PlanningCard.thirteen:
                value = "/assets/cards/Card 13.png"
                break
            case PlanningCard.twenty:
                value = "/assets/cards/Card 20.png"
                break
            case PlanningCard.fourty:
                value = "/assets/cards/Card 40.png"
                break
            case PlanningCard.hundred:
                value = "/assets/cards/Card 100.png"
                break
            case PlanningCard.coffee:
                value = "/assets/cards/Card Coffee.png"
                break
            case PlanningCard.question:
                value = "/assets/cards/Card.png"
                break
        }
        return value
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
