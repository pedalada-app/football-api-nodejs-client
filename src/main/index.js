"use strict";

var makeRequest = require('./utils').makeRequest;

var TeamClient = require('./teams');

var CompetitionClient = require('./competition');

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

		return new CompetitionClient(this.apiKey, compId);

	}

	getFixtures(options) {

		let apiResource = "/fixtures";

		return makeRequest(this.apiKey, apiResource, options);
	}

	getFixturesById(fixtureId, head2head) {

		let apiResource = "/fixtures/" + fixtureId;
		let queryParams = head2head ? {head2head: head2head} : undefined;

		return makeRequest(this.apiKey, apiResource, queryParams);

	}


	getTeamById(id) {

		return new TeamClient(this.apiKey, id);

	}

}

module.exports = function (apiKey) {
	return new FootballApiClient(apiKey);
};