const express = require('express');
const { User } = require('./model');

const router = express.Router();

router.get('/increment-visit/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    let user = await User.findByPk(userId);
    if (!user) { user = await User.create({ id: userId, visit: 0 }) }
    user.visit += 1;
    await user.save();

    res.status(200).send('Visit incremented successfully.');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

module.exports = router;