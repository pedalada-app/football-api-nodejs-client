"use strict";

var request = require('request-promise');

var BASE_URL = "https://api.football-data.org/v1";

var getOptions = function (apiKey, resource) {

	return {
		method: 'GET',
		url: BASE_URL + resource,
		headers: {
			'X-Auth-Token': apiKey,
			'X-Response-Control': "minified"
		},
		resolveWithFullResponse: true
	};

};


class FootballApiClient {

	constructor(apiKey) {

		this.apiKey = apiKey;

	}

	getTeam(id) {

		return new TeamClientWrapper(this.apiKey, id);

	}

}

function mergeResources(response) {

	return {
		data: response.body,
		metadata: {
			requestCount: response.headers['x-requests-available'],
			requestCountReset: response.headers['x-requestcounter-reset']
		}
	};


}

function makeRequest(apiKey, apiResource, options) {

	return request(getOptions(apiKey, apiResource, options))
		.then(mergeResources);
}

class TeamClientWrapper {

	constructor(apiKey, id) {
		this.apiKey = apiKey;
		this.id = id;
	}

	getInfo() {

		let apiResource = "/teams/" + this.id;

		return makeRequest(this.apiKey, apiResource, this.apiKey);

	}

	getFixtures(options) {

		let apiResource = "/teams/" + this.id + "/fixtures";

		return makeRequest(this.apiKey, apiResource, options);

	}

	getPlayers() {

		let apiResource = "/teams/" + this.id + "/players";

		return makeRequest(this.apiKey, apiResource);

	}

}

module.exports = function (apiKey) {
	return new FootballApiClient(apiKey);
};