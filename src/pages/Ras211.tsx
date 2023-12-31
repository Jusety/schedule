import React from "react"
import Timetable from "../components/UI/Timetable"
import { useAppSelector } from "../utils/hooks"

interface RasProps {}

const Ras: React.FC<RasProps> = () => {
    const { week, EvenArray, OddArray, error } = useAppSelector(
        (state) => state.schedule
    )

    let result

    if (week % 2 === 0) {
        result = EvenArray.map((even, index) => (
            <Timetable key={index} day={even.day} lessons={even.lessons} />
        ))
    } else {
        result = OddArray.map((odd, index) => (
            <Timetable key={index} day={odd.day} lessons={odd.lessons} />
        ))
    }
    return (
        <div style={{ marginTop: "10vh" }}>
            {error && <h1 style={{ color: "red" }}>Error:{error}</h1>}
            {result}
        </div>
    )
}

export default Ras
