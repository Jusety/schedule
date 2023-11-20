import { Layout } from "antd"
import React from "react"
import AppRouter from "./components/AppRouter"
import Navbar from "./components/UI/Navbar"
const App: React.FC = () => {
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
