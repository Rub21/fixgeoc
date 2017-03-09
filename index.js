#!/usr/bin/env node

var join = require('./src/join');
var coords = require('./src/coords');
var argv = require('minimist')(process.argv.slice(2));
var action = argv._[0];
switch (action) {
	case 'coords':
		coords.build(argv.iata);
		break;
	case 'fix':
		join.build(argv.json);
		break;
	case 'get':
		join.get();
		break;
	case 'merge':
		join.merge(argv.master, argv.branch);
		break;
	default:
		console.log('unknown command');
}
