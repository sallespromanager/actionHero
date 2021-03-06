// ! Run me from the root of actionHero, IE: `node examples/servers/actionHero_single_node.js`

// load in the actionHero class
var actionHero = require(__dirname + "../../../api.js").actionHero; // normally if installed by npm: var actionHero = require("actionHero").actionHero;

// if there is no config.js file in the application's root, then actionHero will load in a collection of default params.  You can overwrite them with params.configChanges
var params = {};
params.configChanges = {
	general: {},
	log: {
		logFile: "api_peer_2.log",
	},
	httpServer: {
		port: 8081,
	},
	tcpServer: {
		port: 5001
	},
	redis: {
		enable: true,
	}
}

// any additional functions you might wish to define to be globally accessable can be added as part of params.initFunction.  The api object will be availalbe.
params.initFunction = function(api, next){
	next();
}

// start the server!
actionHero.start(params, function(err, api){
	api.log("Boot Sucessful!");
});