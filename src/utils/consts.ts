import { ILesson } from "../models/lesson"

export enum Paths {
    RAS211 = "/",
    MMR211 = "/mmr211",
}

export const timeCons = [
    " 8:30-10:05",
    "10:15-11:50",
    "12:00-13:35",
    "14:00-15:35",
    "15:45-17:20",
    "17:30-19:05",
    "19:15-20:50",
]

export const mondayLessonsOddCons: ILesson[] = [
    {
        id: 3,
        aud: "",
        name: "(Практические занятия) Физическая культура",
        professor: " Балакари Т. М. ",
    },
    {
        id: 4,
        aud: "209/3",
        name: "(Практические занятия) Охрана труда",
        professor: " Хлыстунова И. Н. ",
    },
    {
        id: 5,
        aud: "401/3",
        name: "(Лекционные занятия) Охрана труда",
        professor: " Хлыстунова И. Н. ",
    },
    {
        id: 6,
        aud: "411a/3",
        name: "(Лекционные занятия) Правовое обеспечение профессиональной деятельности",
        professor: " Лесных О. В. ",
    },
]
export const mondayLessonsEvenCons: ILesson[] = [
    {
        id: 3,
        aud: "",
        name: "(Практические занятия) Физическая культура",
        professor: " Балакари Т. М. ",
    },
    {
        id: 4,
        aud: "201/3",
        name: "(Практические занятия) Охрана труда",
        professor: " Хлыстунова И. Н. ",
    },
    {
        id: 5,
        aud: "401/3",
        name: "(Лекционные занятия) Охрана труда",
        professor: " Хлыстунова И. Н. ",
    },
    {
        id: 6,
        aud: "411a/3",
        name: "(Лекционные занятия) Правовое обеспечение профессиональной деятельности",
        professor: " Лесных О. В. ",
    },
]
export const tuesdayLessonsOddCons: ILesson[] = [
    {
        id: 1,
        aud: "223a/3",
        name: "(Практические занятия) Информационные технологии в профессиональной деятельности",
        professor: " Полухин А. К.",
    },
    {
        id: 2,
        aud: "209/3",
        name: "(Лекционные занятия) Конструирование радиоэлектронной аппаратуры",
        professor: " Костюков А.С.",
    },
]
export const tuesdayLessonsEvenCons: ILesson[] = [
    {
        id: 1,
        aud: "223a/3",
        name: "(Практические занятия) Информационные технологии в профессиональной деятельности",
        professor: " Полухин А. К.",
    },
    {
        id: 2,
        aud: "201/3",
        name: "(Лекционные занятия) Конструирование радиоэлектронной аппаратуры",
        professor: " Костюков А.С.",
    },

    {
        id: 3,
        aud: "206/3",
        name: "(Практические занятия) Системы автоматизированного производства",
        professor: " Кондаурова Е. В.",
    },
    {
        id: 4,
        aud: "137/3",
        name: "(Практические занятия) Системы автоматизированного производства",
        professor: " Кондаурова Е. В.",
    },
]
export const wednsdayLessonsOddCons: ILesson[] = [
    {
        id: 4,
        aud: "7 корпус",
        name: "Технология автоматизации радиотехнического производства",
        professor: " Безрукавый А. М.",
    },
    {
        id: 5,
        aud: "7 корпус",
        name: "Технология автоматизации радиотехнического производства",
        professor: " Безрукавый А. М.",
    },
    {
        id: 6,
        aud: "7 корпус",
        name: "Технология автоматизации радиотехнического производства",
        professor: " Безрукавый А. М.",
    },
]
export const wednsdayLessonsEvenCons: ILesson[] = []
export const thursdayLessonsOddCons: ILesson[] = [
    {
        id: 2,
        aud: "230б/3",
        name: "Курсовое проектирование (СПО) Конструирование радиоэлектронной аппаратуры",
        professor: " Денисов Д.А.",
    },
    {
        id: 3,
        aud: "7 корпус",
        name: "Технология автоматизации радиотехнического производства",
        professor: " Безрукавый А. М.",
    },
    {
        id: 4,
        aud: "7 корпус",
        name: "Технология автоматизации радиотехнического производства",
        professor: " Безрукавый А. М.",
    },
    {
        id: 5,
        aud: "7 корпус",
        name: "Технология автоматизации радиотехнического производства",
        professor: " Безрукавый А. М.",
    },
]
export const thursdayLessonsEvenCons: ILesson[] = []

export const fridayLessonsOddCons: ILesson[] = [
    {
        id: 2,
        aud: "230б/3",
        name: "(Лекционные занятия) Управление персоналом",
        professor: " Милованова Н. С.",
    },
    {
        id: 3,
        aud: "230б/3",
        name: "(Лекционные занятия) Управление персоналом",
        professor: " Милованова Н. С.",
    },
    {
        id: 4,
        aud: "137/3",
        name: "(Практические занятия) Системы автоматизированного производства",
        professor: " Кондаурова Е. В.",
    },
    {
        id: 5,
        aud: "404/3",
        name: "(Практические занятия) Правовое обеспечение профессиональной деятельности",
        professor: " Лесных О. В.",
    },
]
export const fridayLessonsEvenCons: ILesson[] = [
    {
        id: 2,
        aud: "230б/3",
        name: "(Лекционные занятия) Управление персоналом",
        professor: " Милованова Н. С.",
    },
    {
        id: 3,
        aud: "230б/3",
        name: "(Лекционные занятия) Управление персоналом",
        professor: " Милованова Н. С.",
    },
    {
        id: 4,
        aud: "202/3",
        name: "(Практические занятия) Системы автоматизированного производства",
        professor: " Кондаурова Е. В.",
    },
    {
        id: 5,
        aud: "309/3",
        name: "(Практические занятия) Иностранный язык",
        professor: " Аленькова Н. В.",
    },
]

export const saturdayLessonsOddCons: ILesson[] = [
    {
        id: 1,
        aud: "2/3",
        name: "Кураторский час",
        professor: " Петрова Г. Н.",
    },
    {
        id: 2,
        aud: "2/3",
        name: "Лекционные занятия Физическая культура ",
        professor: " Гуров С. С.",
    },
    {
        id: 3,
        aud: "202/3",
        name: "(Лекционные занятия) Информационные технологии в профессиональной деятельности",
        professor: " Демихова И. В.",
    },
    {
        id: 4,
        aud: "309/3",
        name: "(Практические занятия) Иностранный язык",
        professor: " Аленькова Н. В.",
    },
]
export const saturdayLessonsEvenCons: ILesson[] = [
    {
        id: 2,
        aud: "2/3",
        name: "(Практические занятия) Правовое обеспечение профессиональной деятельности",
        professor: " Лесных О. В.",
    },
    {
        id: 3,
        aud: "234/3",
        name: "(Лекционные занятия) Информационные технологии в профессиональной деятельности",
        professor: " Демихова И. В.",
    },
]
