module.exports = {
    init: function (client) {

        // Do normal plugin stuff

        return {
            hooks: {
                express: function (pluginName, app) {
                    app.post('/say', (req, res) => {
                        var requestPayload = req.body;
                        client.say(requestPayload.channel, requestPayload.message);
                        res.status(202).end();
                    })
                }
            }
        };
    },
    name: 'tennu-express-hook'
};