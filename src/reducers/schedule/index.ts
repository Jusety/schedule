import { createSlice } from "@reduxjs/toolkit"
import { ILesson } from "../../models/lesson"
import {
    fridayLessonsEvenCons,
    fridayLessonsOddCons,
    mondayLessonsEvenCons,
    mondayLessonsOddCons,
    saturdayLessonsEvenCons,
    saturdayLessonsOddCons,
    thursdayLessonsEvenCons,
    thursdayLessonsOddCons,
    timeCons,
    tuesdayLessonsEvenCons,
    tuesdayLessonsOddCons,
    wednsdayLessonsEvenCons,
} from "../../utils/consts"

const initialState: IscheduleState = {
    week: 13,
    time: timeCons,
    mondayLessonsOdd: mondayLessonsOddCons,
    mondayLessonsEven: mondayLessonsEvenCons,
    tuesdayLessonsOdd: tuesdayLessonsOddCons,
    tuesdayLessonsEven: tuesdayLessonsEvenCons,
    wednsdayLessonsEven: wednsdayLessonsEvenCons,
    wednsdayLessonsOdd: wednsdayLessonsEvenCons,
    thursdayLessonsOdd: thursdayLessonsOddCons,
    thursdayLessonsEven: thursdayLessonsEvenCons,
    fridayLessonsEven: fridayLessonsEvenCons,
    fridayLessonsOdd: fridayLessonsOddCons,
    saturdayLessonsEven: saturdayLessonsEvenCons,
    saturdayLessonsOdd: saturdayLessonsOddCons,
    OddArray: [
        { day: "Понедельник", lessons: mondayLessonsOddCons },
        { day: "Вторник", lessons: tuesdayLessonsOddCons },
        { day: "Среда", lessons: wednsdayLessonsEvenCons },
        { day: "Четверг", lessons: thursdayLessonsOddCons },
        { day: "Пятница", lessons: fridayLessonsOddCons },
        { day: "Суббота", lessons: saturdayLessonsOddCons },
    ],
    EvenArray: [
        { day: "Понедельник", lessons: mondayLessonsEvenCons },
        { day: "Вторник", lessons: tuesdayLessonsEvenCons },
        { day: "Среда", lessons: wednsdayLessonsEvenCons },
        { day: "Четверг", lessons: thursdayLessonsEvenCons },
        { day: "Пятница", lessons: fridayLessonsEvenCons },
        { day: "Суббота", lessons: saturdayLessonsEvenCons },
    ],
}

interface IscheduleState {
    week: number
    time: string[]
    mondayLessonsOdd: ILesson[]
    mondayLessonsEven: ILesson[]
    tuesdayLessonsOdd: ILesson[]
    tuesdayLessonsEven: ILesson[]
    wednsdayLessonsOdd: ILesson[]
    wednsdayLessonsEven: ILesson[]
    thursdayLessonsOdd: ILesson[]
    thursdayLessonsEven: ILesson[]
    fridayLessonsOdd: ILesson[]
    fridayLessonsEven: ILesson[]
    saturdayLessonsOdd: ILesson[]
    saturdayLessonsEven: ILesson[]
    OddArray: any[]
    EvenArray: any[]
}

export const scheduleSlicer = createSlice({
    name: "schedule",
    initialState,
    reducers: {},
})

export default scheduleSlicer.reducer
