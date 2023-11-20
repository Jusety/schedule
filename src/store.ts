import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import auth from "./reducers/auth"
import schedule from "./reducers/schedule"

export const store = configureStore({
    reducer: { auth, schedule },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
