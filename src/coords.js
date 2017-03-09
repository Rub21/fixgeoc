var _ = require('underscore');
var argv = require('minimist')(process.argv.slice(2));
fs = require('fs');
module.exports = {
	build: function(iata) {
		var coordinates = [];
		var quality_local_casper = JSON.parse(fs.readFileSync('api-geocoder/test/passrates/quality-local.casper.json', 'utf8'));
		_.each(quality_local_casper, function(v, k) {
			if (k.split('-')[2] === iata && v.options) {
				coordinates = v.options.proximity;
			}
		});
		console.log(coordinates)
	}
}