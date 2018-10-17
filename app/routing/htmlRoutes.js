//import dependencies
const path = require("path");

//html routes
module.exports = function(app) {
  //home route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../../public/home.html"));
 });

 //friends route
 app.get("/survey", function(req, res) {
   res.sendFile(path.join(__dirname, "../../public/survey.html"));
});

}