"use strict";

var makeRequest = require('./utils').makeRequest;


class CompetitionClient {

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

module.exports = function (apiKey, id) {

	return new CompetitionClient(apiKey, id);

};