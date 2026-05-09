const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 👉 ADD THIS HEALTH CHECK ROUTE
app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})