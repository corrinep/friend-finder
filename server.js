//import dependencies
const express = require("express");

//server and port number
const app = express();
const PORT = process.env.PORT ||3000;

// set up express middleware (.json(), urlencoded)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//import routes from other files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes");

//turn on server
app.listen(PORT, function() {
  console.log(`App is now running on http://localhost:${PORT}`);
})
