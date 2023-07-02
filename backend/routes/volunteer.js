const express = require('express');
const router = express.Router();
const User = require('../models/volunteer');
// Get user by ID
// router.get('/users/:userId', (req, res) => {
//     const userId = req.params.userId;
  
//     User.findById(userId)
//       .then((user) => {
//         if (!user) {
//           res.status(404).json({ error: 'User not found' });
//         } else {
//           res.status(200).json(user);
//         }
//       })
//       .catch((error) => {
//         res.status(500).json({ error: 'Error retrieving user' });
//       });
//   });
  
// Signup route
router.post('/', (req, res) => {
  const { name,email, address,phone,aadhaar_number,areas_interested,comments,pledge,payment_ss,WantTo,qualification,organization_name } = req.body;
  const newUser = new User({ name,email, address,phone,aadhaar_number,areas_interested,comments,pledge,payment_ss,WantTo,qualification,organization_name });

  newUser
    .save()
    .then(() => {
      res.status(201).json({ message: 'Volunteer Registered' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error creating user' });
    });
});

// Login route
// router.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   User.findOne({ email, password })
//     .then((user) => {
//       if (!user) {
//         res.status(401).json({ error: 'Invalid credentials' });
//       } else {
//         res.status(200).json({ message: 'Login successful' });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({ error: 'Error logging in' });
//     });
// });

module.exports = router;
