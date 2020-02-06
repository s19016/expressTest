const express = require('express')
const app = express()
const port = 8081

app.get('/',(req, res, next) => {
    res.send('Hello')
})

app.get('/',(req, res, next) => {
    res.send(JSON.stringify(
        {key1:'value',key2:'value'})
    )
})

app.listen(port)