const express=require('express')
const app=express()
const qrcode=require('qrcode')

qrcode.toString('https://www.w3schools.com/nodejs/nodejs_url.asp',function(err,url){
    console.log("url",url);
})

app.listen(6000,()=>{
    console.log('server connected')
}) 