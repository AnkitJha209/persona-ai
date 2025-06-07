import express, { Application, Request, Response } from 'express'
import { generateResponse } from './controllers/hiteshChat'

const app: Application = express()

app.get('/health-check', (req: Request, res: Response)=> {
    res.send("Working Properly")
})

generateResponse("main react kaha se sikhu")

app.listen(3000, () => {
    console.log("The app is running on Port: 3000")
})