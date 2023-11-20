import { Dispatch } from "@reduxjs/toolkit"
import { IUser } from "../../models/user"
import axios from "axios"
import { authSlicer } from "."

export const login =
    (username: string, password: string) => async (dispatch: Dispatch) => {
        try {
            dispatch(authSlicer.actions.setIsLoading(true))
            const response = await axios.get<IUser[]>("./users.json")
            const mockUser = response.data.find(
                (user) =>
                    user.username === username && user.password === password
            )
            if (mockUser) {
                localStorage.setItem("auth", "true")
                localStorage.setItem(
                    "user",
                    JSON.stringify({ username, password, id: mockUser.id })
                )

                dispatch(authSlicer.actions.setUser(mockUser))
                dispatch(authSlicer.actions.setIsAuth(true))
            } else {
                dispatch(
                    authSlicer.actions.setError("invalid username or password")
                )
            }
        } catch (error: any) {
            dispatch(authSlicer.actions.setError(error.message))
        } finally {
            dispatch(authSlicer.actions.setIsLoading(false))
        }
    }
