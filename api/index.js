const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const salt = bcrypt.genSaltSync(10);
const secret = 'ksdifhkajsiuhasibgisaglsgiuasgngnagouhegldigeiugpiegihgibgdgppuweerptiujbeg';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://blog:Akash123@cluster0.nxtcila.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username: username,
      password: hashedPassword
    });

    const savedUser = await newUser.save();
    res.status(200).send({
      message: 'Data saved successfully',
      msgBody: {
        data: savedUser,
        dataErr: false
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      res.status(409).send({
        message: 'Username already exists',
        msgBody: {
          data: null,
          dataErr: true
        }
      });
    } else {
      // Other error
      res.status(500).send({
        message: 'Server error',
        msgBody: {
          data: null,
          dataErr: true
        }
      });
    }
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        msgBody: {
          data: null,
          dataErr: true
        }
      });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Incorrect password',
        msgBody: {
          data: null,
          dataErr: true
        }
      });
    }

    const token = jwt.sign({ username, id: user._id }, secret, { expiresIn: '1h' });

    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true,
      maxAge: 3600, // Expires in 1 hour
      sameSite: 'strict',
      path: '/'
    }));

    res.status(200).json({
      message: 'Login successful',
      msgBody: {
        data: user,
        dataErr: false
      }
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      msgBody: {
        data: null,
        dataErr: true
      }
    });
  }
});

app.listen(4000);
