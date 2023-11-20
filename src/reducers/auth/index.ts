import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../models/user"

interface IUserState {
    isLoading: boolean
    error: null | string
    isModalLoginOpen: boolean
    user: IUser
    isAuth: boolean
}

const initialState: IUserState = {
    isLoading: false,
    error: null,
    isModalLoginOpen: false,
    user: {} as IUser,
    isAuth: false,
}

export const authSlicer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setIsModalLoginOpen(state, action: PayloadAction<boolean>) {
            state.isModalLoginOpen = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
    },
})

export default authSlicer.reducer
