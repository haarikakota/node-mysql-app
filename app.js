const express = require('express');
const fs = require('fs');
const app = express();

const postsRoutes = require('./routes/posts');
const indexRoutes = require('./routes/index');
const tableRoutes = require('./routes/tables');
const dbRoutes = require('./routes/databases');
const submitRoutes = require('./routes/submissions');

//Configure Routes
app.use('/', indexRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/table', tableRoutes);
app.use('/api/database', dbRoutes);
app.use('/api/submit', submitRoutes);



app.listen('4000', () => {
    console.log('server started on port 4000');
});