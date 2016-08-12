var req = require('../main/index')('7496a844b5b8451fb53526e5d7c650d3');

req.getCompetitionById(424)
   .catch(function (err) {

	   console.error(err);

   });
