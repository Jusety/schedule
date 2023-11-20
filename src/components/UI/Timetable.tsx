import React from "react"
import { useAppSelector } from "../../utils/hooks"
import { ILesson } from "../../models/lesson"

interface TimetableProps {
    day: string
    lessons: ILesson[]
}

const Timetable: React.FC<TimetableProps> = ({ day, lessons }) => {
    const { time } = useAppSelector((state) => state.schedule)

    let i = 0
    return (
        <div className="list">
            <h2>{day}</h2>
            <ol>
                {time.map((table, index) => {
                    if (lessons[i]?.id === index + 1) {
                        return (
                            <li key={index} className="list-element">
                                <span>{table}</span> -{" "}
                                <span>
                                    {lessons[i].name}:{lessons[i].professor}(
                                    {lessons[i].aud})
                                </span>
                                <span style={{ display: "none" }}>{i++}</span>
                            </li>
                        )
                    } else {
                        return (
                            <li key={index} className="list-element">
                                <span>{table}</span>
                            </li>
                        )
                    }
                })}
            </ol>
        </div>
    )
}

export default Timetable
