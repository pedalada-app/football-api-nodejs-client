var req = require('../main/index')('');

req.getTeam(57)
   .getInfo()
   .then(function (res) {

	   console.log(res);

   });

req.getTeam(57)
   .getPlayers()
   .then(function (res) {

	   console.log(res);

   });

req.getTeam(57)
   .getFixtures({
	   venue: "home"
   })
   .then(function (res) {

	   console.log(res);

   });