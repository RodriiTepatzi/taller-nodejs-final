const express = require('express');
const path = require('path');
const { connectDB } = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoute');
const employeeRoutes = require('./routes/employeeRoute');
const viewRoutes = require('./routes/viewRoutes');

const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

app.use('/', viewRoutes);

module.exports = app;