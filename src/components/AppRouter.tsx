import React from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "../routes"

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
    return (
        <Routes>
            {routes.map(({ path, component }) => (
                <Route path={path} key={path} Component={component} />
            ))}
        </Routes>
    )
}

export default AppRouter
