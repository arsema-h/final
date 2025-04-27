const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hash });
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.sendStatus(401);
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.sendStatus(401);

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token });
};
