//  DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()

const fusionCon = require('./controllers/fusionCon')
const personaCon = require('./controllers/personaCon')
const shadowCon = require('./controllers/shadowCon')
const skillsCon = require('./controllers/skillsCon')


app.use(express.json());
app.use(cors());

app.use('/fusion', fusionCon)
app.use('/persona', personaCon)
app.use('/shadow', shadowCon)
app.use('/skills', skillsCon)


let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.listen(PORT, ()=>{
    console.log('WE ARE IN')
})

mongoose.connect('mongodb+srv://QGonz95:.ZybZjMEVB96uAj@sei.eg7suz6.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('linked to mongodb')
})


