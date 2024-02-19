import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'

dotenv.config()
const app = express()
const PORT = 8080
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use('/api/users', userRoutes)
app.use('/api/explore', exploreRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})
