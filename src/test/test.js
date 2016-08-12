var req = require('../main/index')('');

req.getTeamById(57)
   .getInfo()
   .then(function (res) {

	   console.log(res);

   });

req.getTeamById(57)
   .getPlayers()
   .then(function (res) {

	   console.log(res);

   });

req.getTeamById(57)
   .getFixtures({
	   venue: "home"
   })
   .then(function (res) {

	   console.log(res);

   });