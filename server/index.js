import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Question.js'
import answerRoutes from './routes/Answers.js'

const app = express();

dotenv.config()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is QueryTalk website")
})

app.use('/users', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = "mongodb+srv://anujak1809:nayanakokate19@query-talk.cpb5cep.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))