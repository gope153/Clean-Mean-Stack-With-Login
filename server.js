const express = require('express')
const app = express()
const logger = require('morgan')
const port = process.env.PORT || 5050

require('./application/server/setup/dbconnect')

require('./application/server/setup/setup')(app)

app.use('/', require('./application/server/controller/routes'));

// ERROR HANDLING
app.use(function (err, req, res, next) {
	console.log(err.toString());
	res.status(500).send({ message: 'error on the way' }).end();
});

app.listen(port, () => {
	console.log(`Listening at port:${port}`)
})