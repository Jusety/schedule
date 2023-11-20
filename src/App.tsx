import { Layout } from "antd"
import React, { useEffect } from "react"
import "./App.css"
import AppRouter from "./components/AppRouter"
import Navbar from "./components/UI/Navbar"
import { useAppDispatch } from "./utils/hooks"
import { authSlicer } from "./reducers/auth"
import { IUser } from "./models/user"

const App: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            dispatch(authSlicer.actions.setIsAuth(true))
            dispatch(
                authSlicer.actions.setUser(
                    JSON.parse(localStorage.getItem("user") || "") as IUser
                )
            )
        }
    }, [dispatch])

    return (
        <Layout>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    )
}

export default App
