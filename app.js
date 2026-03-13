const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static assets
app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// method override for PUT/DELETE in forms
app.use(methodOverride('_method'));

// session
app.use(
  session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false
  })
);

// flash messages
app.use(flash());

// global vars for templates
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.user = req.session.user || null;
  next();
});

// routes
const authRoutes = require('./routes/auth');
const materialRoutes = require('./routes/materials');
const dashboardRoutes = require('./routes/dashboard');
const stockRoutes = require('./routes/stockmovements');
const restockRoutes = require('./routes/restocks');
const usageRoutes = require('./routes/usages');
// additional routes would be added similarly

app.use('/', authRoutes);
app.use('/materials', materialRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/stock-movements', stockRoutes);
app.use('/restocks', restockRoutes);
app.use('/usages', usageRoutes);
const reportRoutes = require('./routes/reports');
app.use('/reports', reportRoutes);

module.exports = app;