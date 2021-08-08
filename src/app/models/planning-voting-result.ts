export class PlanningVotingResult {
    value: string
    widthPercentage: number
    transparency: number

    constructor(value: string, widthPercentage: number, transparency: number = 1) {
        this.value = value
        this.widthPercentage = widthPercentage
        this.transparency = transparency
    }
}
