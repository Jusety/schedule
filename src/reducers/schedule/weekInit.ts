import { Dispatch } from "@reduxjs/toolkit"
import { scheduleSlicer } from "."

//для работы прототипа
declare global {
    interface Date {
        getWeek(): number
    }
}

export const weekInit = () => async (dispatch: Dispatch) => {
    try {
        dispatch(scheduleSlicer.actions.setIsLoading(true))

        Date.prototype.getWeek = function () {
            let onejan = new Date(this.getFullYear(), 0, 1)
            return Math.ceil(
                ((Number(this) - Number(onejan)) / 86400000 +
                    onejan.getDay() +
                    1) /
                    7
            )
        }
        let weekNumber = new Date().getWeek()

        dispatch(scheduleSlicer.actions.setWeek(weekNumber - 35))
    } catch (error: any) {
        dispatch(scheduleSlicer.actions.setError(error))
    } finally {
        dispatch(scheduleSlicer.actions.setIsLoading(false))
    }
}
