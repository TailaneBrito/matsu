const express = require('express'), app = express();
const path = require('path');
const {allowedNodeEnvironmentFlags } = require('process');
const port = process.env.PORT || 3000;

//routes
app.use(require('./api/routes/index'));

app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");


app.set('views', __dirname + '/views')


//static directories
app.use(express.static("public"));
app.use("helpers", express.static("helpers"));

app.listen(port, () => console.log(`Listening on port ${port}`))