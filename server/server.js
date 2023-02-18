const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const store = require('session-file-store');
const authRouter = require('./routes/authRouter');
const searchRequestRouter = require('./routes/searchRequestRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(cors({ origin: true, credentials: true }));

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/user', authRouter);
app.use('/api/searchRequests', searchRequestRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
