const express = require('express');
const block = require('./routes/block')

const app = express();

app.use(express.json())

app.use('/block', block)


app.listen(3000, () => {
   console.log(`listening to port http://localhost:3000`)
})