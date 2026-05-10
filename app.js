const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5001

// Serve React build
app.use(express.static(path.join(__dirname, 'dist')))

// API routes
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/test', (req, res) => {
  res.send('hello from feature branch')
})

// React fallback route (important)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})