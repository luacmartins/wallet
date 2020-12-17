const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const mongoose = require('mongoose')

// import routers
const userRouter = require('./routers/user')
const linkRouter = require('./routers/link')
const categoryRouter = require('./routers/category')
const accountsRouter = require('./routers/accounts')
const transactionsRouter = require('./routers/transactions')

// import middleware
const cors = require('cors')
const useCors = require('./middleware/useCors')
const helmet = require('helmet')
const auth = require('./middleware/auth')


// connect to DB
mongoose.connect(process.env.MONGODB_PATH, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
})

// add helmet for enhanced security, 
// CORS for cross site requests
// parse req body as json
// setup passport sessions
app.use(helmet())
app.use(cors())
app.use(useCors)
app.use(express.json())
app.use(auth)

// private endpoints go here
app.use(userRouter)
app.use(categoryRouter)
app.use(linkRouter)
app.use(accountsRouter)
app.use(transactionsRouter)

app.listen(port, () => {
   console.log('server running')
})