import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store"

import App from "./App"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container!)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
