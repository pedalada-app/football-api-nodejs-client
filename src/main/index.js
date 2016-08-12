"use strict";

var request = require('request-promise');

var BASE_URL = "https://api.football-data.org/v1";

var options = {
	method: 'POST',
	uri: 'http://posttestserver.com/post.php',
	headers: {}
};

var getOptions = function (apiKey, resource) {

	return {
		method: 'GET',
		url: BASE_URL + resource,
		headers: {
			'X-Auth-Token': apiKey
		},
		resolveWithFullResponse: true
	};

};

class FootballApiClient {

	constructor(apiKey) {

		this.apiKey = apiKey;

	}

	getCompetitionById(id) {

		let competitionResource = "/competitions/" + id;

		return request(getOptions(this.apiKey, competitionResource))
			.then(function (result) {

				console.log(result.body);
				console.log(result.headers);

			});

	}


}

module.exports = function (apiKey) {
	return new FootballApiClient(apiKey);
};