import React from "react"
import { Row } from "antd/es/grid"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { Paths } from "../../utils/consts"
import LoginModal from "./modal/LoginModal"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { authSlicer } from "../../reducers/auth"
import { scheduleSlicer } from "../../reducers/schedule"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const dispatch = useAppDispatch()
    const { isAuth } = useAppSelector((state) => state.auth)
    const { week } = useAppSelector((state) => state.schedule)
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("auth")
        localStorage.removeItem("user")
        location.reload()
    }

    const weekChangeHandler = (num: number) => {
        dispatch(scheduleSlicer.actions.setWeek(week + num))
    }

    return (
        <Row justify="space-around">
            <h3 className="week">
                <div>
                    <Button
                        onClick={() => {
                            weekChangeHandler(-1)
                        }}
                        size="small"
                        className="week-btn"
                    >
                        -
                    </Button>
                    <Button
                        onClick={() => weekChangeHandler(1)}
                        size="small"
                        className="week-btn"
                    >
                        +
                    </Button>
                </div>
                <span style={{ marginLeft: "1vh" }}> Неделя: {week}</span>
            </h3>
            <Button className="nav-btn" onClick={() => navigate(Paths.RAS211)}>
                РАС-211
            </Button>
            {isAuth ? (
                <Button id="login-btn" onClick={logOut}>
                    Выйти
                </Button>
            ) : (
                <Button
                    className="nav-btn"
                    id="login-btn"
                    onClick={() =>
                        dispatch(authSlicer.actions.setIsModalLoginOpen(true))
                    }
                >
                    Войти
                </Button>
            )}
            <LoginModal />
        </Row>
    )
}

export default Navbar
