// // 📁 backend/routes/auth.js
// const express = require('express');
// const router = express.Router();
// const authController = require('../Controller/authcontroller');

// router.post('/register', authController.register);
// router.post('/login', authController.login);

// // module.exports = router;// 📁 routes/authRoutes.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Models/user');
const { login } = require('../Controller/authcontroller');

router.post('/login', login);

// ✅ Add this REGISTER route
router.post('/register', async (req, res) => {
  const { username, password, role, barCouncilId } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object
    const newUser = new User({
      username,
      password: hashedPassword,
      role,
      barCouncilId: role === 'advocate' ? barCouncilId : undefined
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed on server' });
  }
});
module.exports = router;

