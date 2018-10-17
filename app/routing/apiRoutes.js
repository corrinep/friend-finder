//import data
const friendData = require("../../data/friends");

//create and expoert API routes
module.exports = function(app) {

  //create get route
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  //create POST to recieve data from frontend
  app.post("/api/friends", function(req, res) {
    //grab sent info
    const newFriend = req.body;

    //add to list of friends
    friendData.push(newFriend);

    const friendo = friendData.length;

  })
}