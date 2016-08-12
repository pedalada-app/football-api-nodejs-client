"use strict";

var request = require('request-promise');

var BASE_URL = "https://api.football-data.org/v1";


var getOptions = function (apiKey, resource, queryParams) {

	queryParams = queryParams || {};

	return {
		method: 'GET',
		url: BASE_URL + resource,
		headers: {
			'X-Auth-Token': apiKey,
			'X-Response-Control': "minified"
		},
		resolveWithFullResponse: true,
		qs: queryParams
	};

};

class FootballApiClient {

	constructor(apiKey) {

		this.apiKey = apiKey;

	}

	getCompetitions(season) {

		let queryParams = season ? {season: season} : undefined;
		let apiResource = "/competitions";

		return makeRequest(this.apiKey, apiResource, queryParams);

	}

	getCompetitionById(compId) {

		return new Competition(this.apiKey, compId);

	}

	getFixures(options) {

		let apiResource = "/fixtures";

		return makeRequest(this.apiKey, apiResource);
	}

	getFixturesById(fixtureId, head2head) {

		let apiResource = "/fixtures/" + fixtureId;
		let queryParams = head2head ? {head2head: head2head} : undefined;

		return makeRequest(this.apiKey, apiResource, options);

	}


	getTeam(id) {

		return new TeamClient(this.apiKey, id);

	}

}

class Competition {

	constructor(apiKey, id) {

		this.id = id;
		this.apiKey = apiKey;

	}

	getInfo() {

		let apiResource = "/competitions/" + this.id;

		return makeRequest(this.apiKey, apiResource);
	}

	getTeams() {

		let apiResource = "/competitions/" + this.id + "/teams";

		return makeRequest(this.apiKey, apiResource);
	}

	getTable(matchday) {

		let queryParams = matchday ? {matchday: matchday} : undefined;
		let apiResource = "/competitions/" + this.id + "/leagueTable";

		return makeRequest(this.apiKey, apiResource, queryParams);

	}

	getFixtures(options) {

		let queryParams = options ? options : undefined;
		let apiResource = "/competitions/" + this.id + "/fixtures";

		return makeRequest(this.apiKey, apiResource, queryParams);

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

class TeamClient {

	constructor(apiKey, id) {
		this.apiKey = apiKey;
		this.id = id;
	}

	getInfo() {

		let apiResource = "/teams/" + this.id;

		return makeRequest(this.apiKey, apiResource);

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