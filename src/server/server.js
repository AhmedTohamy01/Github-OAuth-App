const express = require('express')
const bodyParser = require('body-parser')
const FormData = require('form-data')
const fetch = require('node-fetch')
const config = require('./config')

// the reason for this mini-express-server is only to bypass the CORS error.

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'text/*' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.post('/authenticate', (req, res) => {
  const { code } = req.body

  const data = new FormData()
  data.append('client_id', config.client_id)
  data.append('client_secret', config.client_secret)
  data.append('code', code)
  data.append('redirect_uri', config.redirect_uri)

  fetch(`https://github.com/login/oauth/access_token`, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.text())
    .then((paramsString) => {
      let params = new URLSearchParams(paramsString)
      const access_token = params.get('access_token')

      return fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    })
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response)
    })
    .catch((error) => {
      console.log(error)
      return res.status(400).json(error)
    })
})

app.get('/', (req, res) => {})

const PORT = 5000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
