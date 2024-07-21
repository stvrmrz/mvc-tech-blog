const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log('Sign-up request received:', req.body);

    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      console.log('User signed up and logged in:', userData.username);

      res.status(200).json({ message: 'User successfully signed up', user: userData });
    });
  } catch (err) {
    console.error('Error during sign-up:', err);
    res.status(500).json({ message: 'Error signing up', error: err });
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log('Login request received:', req.body);

    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      console.log('User not found');
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      console.log('Invalid password');
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      console.log('Login successful');
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
