const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const routes=require('./routes/paginationRoutes')
app.use(cors())
mongoose.connect('mongodb://localhost:27017/pagination',{family:4})
.then(()=>{
    console.log("db connected")
})
.catch(()=>{
    console.log("db fails")
})

app.use('/pages',routes)


app.listen(4000,()=>{
    console.log('server connected')
})