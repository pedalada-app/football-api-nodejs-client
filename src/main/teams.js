"use strict";

var makeRequest = require('./utils').makeRequest;

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

module.exports = function (apiKey, id) {

	return new TeamClient(apiKey, id);

};