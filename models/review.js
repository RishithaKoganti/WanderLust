const mongoose = require('mongoose');
const { create } = require('./listing');

main()
.then(()=>{
    console.log("connected succesfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const reviewSchema = new mongoose.Schema({
    comment: String,
    rate:{
        type: Number,
        min: 1,
        max: 5
    },
    createAt: Date.now(),
})
module.exports = moongose.model("Review",reviewSchema);