var express = require('express');
    // mongoose = require('mongoose'),
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var expressSession = require('express-session');


app.use(expressSession({secret:'somesecrettokenhere'}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/client')));
app.use(express.static(path.join(__dirname + '/bower_components')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);
/* since routes.js exports a function
 require("./server/config/routes.js") IS A FUNCTION!
 now we invoke it, passing it app!
*/

app.listen(8000, function(){
    console.log("litening at port 8000")
})
