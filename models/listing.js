const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connected succesfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const listingSchema = new mongoose.Schema({
  title:{
    type: String,
    maxlenght: 100,
    required: true,
  },
  description:{
    type: String,
    maxlenght: 200,
  },
  image:{
    type: String,
  },
  price:{
    type: Number,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
  country:{
    type: String,
    required: true,
  }
})
const Listing = mongoose.model("Listing",listingSchema);
modules.export = Listing;