import {Router} from "express"
import {iAmTeapot, indexController} from './index.controller'

export const indexRoute = Router()

indexRoute.route("/")
    .get(indexController)

indexRoute.route("/teapot").get(iAmTeapot)