import {Request, Response} from "express";

export async function myFunction(req: Request, res: Response) {

    let list: string[] = [];

    for (let i = 0; i < 10000; i++) {
        list.push("test")
    }

    return res.json({
        response: list
    })
}
