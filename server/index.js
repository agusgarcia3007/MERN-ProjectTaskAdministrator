const express = require('express')
const app = express()
const port = process.env.port || 4000
const connectDB = require('./config/db');

connectDB();

//enable express.json
app.use(express.json({extended : true }))

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})