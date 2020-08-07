import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', function(_, res) {
  res.send('hello worlddd')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
    return
  }

  console.log(`App listen on port: ${port}`)
})