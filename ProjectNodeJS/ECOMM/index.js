const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const authRoute = require('./routes/auth.js')
const userRoute = require('./routes/user.js')
const productRoute = require('./routes/product.js')
const PORT = process.env.PORT||5000
dotEnv.config()

const app = express()


mongoose.connect(process.env.MONGO_DB_URL)
        .then(()=> console.log('MongoDB connection successful'))
        .catch(err=>{
          console.log(err)
        })


// All Api Router Goes Here
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/products', productRoute)



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})