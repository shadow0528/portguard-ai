const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Placeholder Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'PortGuard AI Backend is running.' });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/devices', require('./routes/devices'));
app.use('/api/switches', require('./routes/switches'));

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = { app, server, io, prisma };
