// controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Dummy admin data (replace with your actual data source)
const adminData = {
  email: 'admin@example.com',
//   password: '$2b$10$kxuQ6ZdlY.jjpJ3kDvNEGOjRwXvQqkwj0bE3JRYoOeW8HXhzyPIIi', // hashed password: 'password123'
    password: 'password123'
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match the admin data
//   if (email === adminData.email && (await bcrypt.compare(password, adminData.password))) {
//     res.json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid email or password' });
//   }

    if (email === adminData.email && password === adminData.password) {
        const token = jwt.sign({ email: adminData.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};