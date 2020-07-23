const express = require('express');

module.exports = {
    init: function () {

        const express = require('express')
        const app = express()
        const port = 3000

        app.use(express.json()) // for parsing application/json

        app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

        return {
            express: app
        };
    },
    name: 'tennu-express',
};