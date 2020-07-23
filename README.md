# tennu-express

A plugin for the [tennu](https://github.com/Tennu/tennu) irc framework.

A plugin for the tennu IRC framework. Exposes an ExpressJS hook for other plugins.

## Configuration

- This plugin must be registered last.
- This plugin is designed to be forked. Theres only so much a simple webserver can do for you until you need to customize it. IE: security.

## Usage

See /samples. All you need to do is utilize the hook `express`, you will be passed an expressjs [app](https://expressjs.com/en/4x/api.html#app) instance.

```javascript
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
    name: 'your-plugin'
};
```