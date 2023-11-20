import { IRoute } from "../models/route"
import Ras211 from "../pages/Ras211"
import { Paths } from "../utils/consts"

export const routes: IRoute[] = [
    {
        path: Paths.RAS211,
        component: Ras211,
    },
]
