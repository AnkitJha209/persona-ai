import express, { Application, Request, Response, urlencoded } from 'express'
import { chatWithHiteshAI } from './controllers/hiteshChat'
import cors from 'cors'
import { chatPiyushAI } from './controllers/piyushChat'
const app: Application = express()

app.use(express.json())
app.use(urlencoded())
app.use(cors())

app.get('/health-check', (req: Request, res: Response)=> {
    res.send("Working Properly")
})

app.post('/chat-with-hitesh-ai', chatWithHiteshAI)
app.post('/chat-with-piyush-ai', chatPiyushAI)

app.listen(3000, () => {
    console.log("The app is running on Port: 3000")
})