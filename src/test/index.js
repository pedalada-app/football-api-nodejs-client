var chai = require('chai');

var should = chai.should();

var expect = chai.expect;

var Client = require('../main/index')('');

describe("Client", function () {

	describe("Team-Client-Api", function () {

		it("Test team get info", function (done) {

			Client.getTeam(57)
				  .getInfo()
				  .then(function (res) {

					  expect(res.data.name).be.equal("Arsenal FC");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

				  })

		});

		it("Test team get players", function (done) {

			Client.getTeam(57)
				  .getPlayers()
				  .then(function (res) {

					  expect(res.data.players).be.a("array");

					  done();

				  });

		});

		it("Test team get fixtures ", function (done) {

			Client.getTeam(57)
				  .getFixtures()
				  .then(function (res) {

					  expect(res.data.fixtures).be.a("array");

					  done();

				  });

		});

	});

	describe("Competition-Client-Api", function () {

		it("Test team get info", function (done) {

			Client.getTeam(57)
				  .getInfo()
				  .then(function (res) {

					  expect(res.data.name).be.equal("Arsenal FC");

					  done();

				  })
				  .catch(function (err) {

					  console.error(err);

				  })

		});

		it("Test team get players", function (done) {

			Client.getTeam(57)
				  .getPlayers()
				  .then(function (res) {

					  expect(res.data.players).be.a("array");

					  done();

				  });

		});

		it("Test team get fixtures ", function (done) {

			Client.getTeam(57)
				  .getFixtures()
				  .then(function (res) {

					  expect(res.data.fixtures).be.a("array");

					  done();

				  });

		});

	});

});
