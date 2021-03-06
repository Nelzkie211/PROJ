const express = require('express')
const cors = require('cors')

const app = express()

let corOptions = {
  origin: 'https://localhost:8081'
}



// middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true} ))

// routers

const productRoutes = require('./routes/productRoutes.js')
app.use('/api/products', productRoutes)

// testing api

app.get('/', (req,res)=>{
  res.json({message: 'hello from api'})
})

//port

const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})