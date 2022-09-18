const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const authRoute = require('./routes/auth.route');
const projectRoute = require('./routes/project.route');
const listRoute = require('./routes/list.route');
const issueRoute = require('./routes/issue.route');
const userRoute = require('./routes/user.route');
const memberRoute = require('./routes/member.route');
const { authMiddleware } = require('./controllers/auth.controller');

const corOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
};

app.use(cors(corOptions));
app.use(cookieParser());
app.use(express.json());
app.use('/auth', authRoute);
app.use(authMiddleware);
app.use('/api/user', userRoute);
app.use('/api/list', listRoute);
app.use('/api/issue', issueRoute);
app.use('/api/project', projectRoute);
app.use('/api/member', memberRoute);

app.listen(5000);
