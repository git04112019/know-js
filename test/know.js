var Buffer = require("buffer/").Buffer;
var should = require("should");
var know = require("../index.js");

describe("Know JS", function () {

	it("should be ok", function () {
		(know).should.be.ok;
	});

	it("should be object", function () {
		(know).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(know).should.have.property(property);
		});
	});

});
