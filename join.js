var _ = require('underscore');
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var file = 'api-geocoder/test/passrates/quality-local.casper.json';
module.exports = {
	build: function(json) {
		var addobjs = JSON.parse(json);
		var quality_local_casper = JSON.parse(fs.readFileSync(file, 'utf8'));
		_.each(addobjs, function(v, k) {
			quality_local_casper[k] = v;

		});
		fs.writeFile(file, JSON.stringify(quality_local_casper), function(err) {
			if (err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		});
	},
	get: function() {
		var quality_local_casper = JSON.parse(fs.readFileSync(file, 'utf8'));
		console.log(JSON.stringify(quality_local_casper));
	},

	merge: function(master, branch) {
		master = JSON.parse(master);
		branch = JSON.parse(branch);
		var merge = {};
		_.each(master, function(v, k) {
			if (!branch[k]) {
				branch[k] = v;
			}
		});
		var sort = _.sortBy(_.keys(branch), function(obj) {
			return +obj
		});

		for (var i = 0; i < sort.length; i++) {
			merge[sort[i]] = branch[sort[i]];
		}
		console.log(JSON.stringify(merge))
	}

}