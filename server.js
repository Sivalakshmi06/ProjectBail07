// // 📁 backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./Routes/authroutes');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Correct route mounting
// app.use('/api/auth', authRoutes);

// // Connect to MongoDB and start server
// mongoose.connect('mongodb://localhost:27017/bail-app')
//   .then(() => {
//     app.listen(5000, () => console.log('Server running on http://localhost:5000'));
//   })
//   .catch(err => console.error('MongoDB connection error:', err));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes.js');
app.use('/api/auth', authRoutes);

// DB + Server
mongoose.connect('mongodb+srv://sivalakshmi26062006:sivalakshmi26062006@cluster0.narwqtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/bail-app', {
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
