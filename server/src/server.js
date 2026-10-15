import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Contact from './models/Contact.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}
    if (![name, email, message].every(v => typeof v === 'string' && v.trim())) {
      return res.status(400).json({ message: 'Name, email and message are required.' })
    }
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return res.status(400).json({ message: 'One or more fields are too long.' })
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) return res.status(400).json({ message: 'Please provide a valid email address.' })
    await Contact.create({ name, email, message })
    return res.status(201).json({ message: 'Your message has been received.' })
  } catch (error) {
    console.error('Contact form error:', error.message)
    return res.status(500).json({ message: 'Unable to save your message right now.' })
  }
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`API listening on http://localhost:${port}`))
  })
  .catch(error => {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  })
