// 
const User = require('../Models/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = await User.findOne({ username, role });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', role });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
