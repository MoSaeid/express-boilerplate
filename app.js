const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const fooRoutes = require('./routes/foo');
const barRoutes = require('./routes/bar');

const port = 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
	// console.log(req)
	next()
})

app.use('/foo', fooRoutes)
app.use('/bar', barRoutes)


app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, (e) => {
	console.log(`Your server is running at localhost:${port}`)
}) //TODO: log error if there is error