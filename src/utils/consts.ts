import { ILesson } from "../models/lesson"

export enum Paths {
    RAS211 = "/",
    MMR211 = "/mmr211",
}

export const timeCons = [
    " 8:30-10:05",
    "10:15-11:50",
    "12:00-13:35",
    "14:05-15:40",
    "15:50-17:25",
    "17:35-19:10",
]

export const mondayLessonsOddCons: ILesson[] = [
    {
        id: 3,
        aud: "7/3",
        name: "(пр)Компьютерная графика",
        professor: "Надеева И.А",
    },
    {
        id: 4,
        aud: "7/3",
        name: "(пр)Компьютерная графика",
        professor: "Надеева И.А",
    },
]
export const mondayLessonsEvenCons: ILesson[] = []
export const tuesdayLessonsEvenCons: ILesson[] = [
    {
        id: 2,
        aud: "",
        name: "(пр) Физическая культура",
        professor: "Костюков А.П",
    },
    {
        id: 3,
        aud: "404/3",
        name: "(л) Технология настройки и регулировки источников питания и аналоговых электронных устройств",
        professor: "Петрова Г.Н",
    },
    {
        id: 4,
        aud: "404/3",
        name: "(л) Технология настройки и регулировки источников питания и аналоговых электронных устройств",
        professor: "Петрова Г.Н",
    },
]
export const tuesdayLessonsOddCons: ILesson[] = [
    {
        id: 1,
        aud: "420/3",
        name: "Kлассный час",
        professor: "Петрова Г.Н",
    },
    {
        id: 2,
        aud: "",
        name: "(пр) Физическая культура",
        professor: "Костюков А.П",
    },
    {
        id: 3,
        aud: "404/3",
        name: "(л) Технология настройки и регулировки источников питания и аналоговых электронных устройств",
        professor: "Петрова Г.Н",
    },
    {
        id: 4,
        aud: "404/3",
        name: "(л) Технология настройки и регулировки источников питания и аналоговых электронных устройств",
        professor: "Петрова Г.Н",
    },
    {
        id: 5,
        aud: "309/3",
        name: "(л) Технология настройки и регулировки цифровых устройств",
        professor: "Кречетова О.Г",
    },
]
export const wednsdayLessonsEvenCons: ILesson[] = [
    {
        id: 1,
        aud: "2/3",
        name: "(л) Электронная техника",
        professor: "Денисов Д.А",
    },
    {
        id: 2,
        aud: "309/3",
        name: "(пр) Иностранный язык",
        professor: "Аленькова Н.В",
    },
    {
        id: 3,
        aud: "404/3",
        name: "(л) Психология общения",
        professor: "Лесных О.В",
    },
    {
        id: 4,
        aud: "404/3",
        name: "(пр) Психология общения",
        professor: "Лесных О.В",
    },
]
export const thursdayLessonsOddCons: ILesson[] = [
    {
        id: 4,
        aud: "2/3",
        name: "(л) Электрорадиоизмерения",
        professor: "Илларионов А.Г",
    },
]
export const thursdayLessonsEvenCons: ILesson[] = [
    {
        id: 2,
        aud: "401а/3",
        name: "(л) Экологические основы природопользования",
        professor: "Рязанова О.А",
    },
    {
        id: 3,
        aud: "401а/3",
        name: "(пр) Экологические основы природопользования",
        professor: "Рязанова О.А",
    },
    {
        id: 4,
        aud: "223/3",
        name: "(пр) Электронная техника",
        professor: "Денисов Д.А",
    },
    {
        id: 5,
        aud: "210/3",
        name: "(л.р.) Электронная техника",
        professor: "Денисов Д.А",
        weekLast: [2, 6, 10, 14],
    },
    {
        id: 6,
        aud: "210/3",
        name: "(л.р.) Электронная техника",
        professor: "Денисов Д.А",
        weekLast: [2, 6, 10, 14],
    },
]

export const fridayLessonsOddCons: ILesson[] = [
    {
        id: 2,
        aud: "309/3",
        name: "(пр) Технология настройки и регулировки цифровых устройств",
        professor: "Кречетова О.Г",
    },
    {
        id: 3,
        aud: "309/3",
        name: "(пр) Технология настройки и регулировки цифровых устройств",
        professor: "Кречетова О.Г",
    },
    {
        id: 4,
        aud: "3/3",
        name: "(пр) Технология настройки и регулировки источников питания и аналоговых электронных устройств",
        professor: "Петрова Г.Н",
    },
]
export const fridayLessonsEvenCons: ILesson[] = [
    {
        id: 1,
        aud: "7/3",
        name: "(пр) Компьютерная графика",
        professor: "Надеева И.А",
    },
    {
        id: 2,
        aud: "7/3",
        name: "(пр) Компьютерная графика",
        professor: "Надеева И.А",
    },
    {
        id: 3,
        aud: "101/3",
        name: "(л.р.) Вычислительная техника",
        professor: "Полухин А.К",
        weekLast: [2, 6, 10, 14],
    },
    {
        id: 4,
        aud: "101/3",
        name: "(л.р.) Вычислительная техника",
        professor: "Полухин А.К",
        weekLast: [2, 6, 10, 14],
    },
]

export const saturdayLessonsOddCons: ILesson[] = [
    {
        id: 1,
        aud: "309/3",
        name: "(л) Технология настройки и регулировки цифровых устройств",
        professor: "Кречетова О.Г",
    },
    {
        id: 2,
        aud: "309/3",
        name: "(л/пр) Технология настройки и регулировки цифровых устройств",
        professor: "Кречетова О.Г",
    },
]
export const saturdayLessonsEvenCons: ILesson[] = [
    {
        id: 1,
        aud: "3/3",
        name: "(л.р.) Технология настройки и регулировки источников питания и аналоговых электронных устройств",
        professor: "Петрова Г.Н",
    },
    {
        id: 2,
        aud: "3/3",
        name: "(л.р.) Технология настройки и регулировки источников питания и аналоговых электронных устройств",
        professor: "Петрова Г.Н",
    },
]
