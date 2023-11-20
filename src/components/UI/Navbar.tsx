import React from "react"
import { Row } from "antd/es/grid"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { Paths } from "../../utils/consts"
import LoginModal from "./modal/LoginModal"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { authSlicer } from "../../reducers/auth"

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

    return (
        <Row justify="space-around">
            <h3 className="week">Неделя: {week}</h3>
            <Button className="nav-btn" onClick={() => navigate(Paths.RAS211)}>
                RAS-211
            </Button>
            {isAuth ? (
                <Button className="nav-btn" id="login-btn" onClick={logOut}>
                    Exit
                </Button>
            ) : (
                <Button
                    className="nav-btn"
                    id="login-btn"
                    onClick={() =>
                        dispatch(authSlicer.actions.setIsModalLoginOpen(true))
                    }
                >
                    Log in
                </Button>
            )}
            <LoginModal />
        </Row>
    )
}

export default Navbar
