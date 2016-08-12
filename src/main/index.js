"use strict";

var request = require('request-promise');

var BASE_URL = "https://api.football-data.org/v1";

var options = {
	method: 'POST',
	uri: 'http://posttestserver.com/post.php',
	headers: {}
};

var getOptions = function (apiKey, resource, queryParams) {

	queryParams = queryParams || {};

	return {
		method: 'GET',
		url: BASE_URL + resource,
		headers: {
			'X-Auth-Token': apiKey
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
		let competitionResource = "/competitions";

		return request(getOptions(this.apiKey, competitionResource, queryParams))
			.then(mergeResources);

	}

	getCompetitionById(compId) {

		return new Competition(this.apiKey, compId);

	}

	getFixures(options) {

		let fixturesResource = "/fixtures";
	}

	getFixureById(fixtureId, head2head) {

	}

}

class Competition {

	constructor(apiKey, id) {

		this.id = id;
		this.apiKey = apiKey;

	}

	getInfo() {

		let competitionResource = "/competitions/" + this.id;

		return request(getOptions(this.apiKey, competitionResource))
			.then(mergeResources);
	}

	getTeams() {

		let competitionResource = "/competitions/" + this.id + "/teams";

		return request(getOptions(this.apiKey, competitionResource))
			.then(mergeResources);
	}

	getTable(matchday) {

		let queryParams = matchday ? {matchday: matchday} : undefined;
		let competitionResource = "/competitions/" + this.id + "/leagueTable";

		return request(getOptions(this.apiKey, competitionResource, queryParams))
			.then(mergeResources);

	}

	getFixtures(options) {

		let queryParams = options ? options : undefined;
		let competitionResource = "/competitions/" + this.id + "/fixtures";

		return request(getOptions(this.apiKey, competitionResource, queryParams))
			.then(mergeResources);

	}

}

module.exports = function (apiKey) {
	return new FootballApiClient(apiKey);
};