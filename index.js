const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const disasterRoutes = require('./routes/disasterRoutes');
app.use('/disasters', disasterRoutes);

io.on('connection', (socket) => {
    console.log('a user connected');
});

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});