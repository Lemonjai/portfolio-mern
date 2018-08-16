const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/healthcheck', async(req, res, next) => {

    const docs = await { message: 'Backend Server online'}
    res.status(200).send(docs)
})

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))