import {Request, Response} from "express";

export function indexController(request: Request, response: Response): Response {
    return response.json('🤯 😬 😱')
}

export function iAmTeapot (req: any, res: any) {
    return res.json("I am a teapot 418")
}