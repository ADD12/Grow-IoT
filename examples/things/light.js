const Thing = require('../../dist/Thing.es6.js');
const Hs100Api = require('hs100-api');

module.exports = new Thing({
	properties: {
		name: "Light"
	},

	initialize: function () {
		console.log('Light initialized');

        var client = new Hs100Api.Client();

		// Look for plug, assign to plug property.
        client.startDiscovery().on('plug-new', (plug) => {
          // console.log(plug);

          // There is definitely a better way of doing this.
          if (plug.name === 'Plant Light') {
            this.light = plug;
          }
        });
	},

    turn_on: function () {
    	this.light.setPowerState(true);
        console.log("Light on");
    },

    turn_off: function () {
        console.log("Light off");
        this.light.setPowerState(false);
    }
});


