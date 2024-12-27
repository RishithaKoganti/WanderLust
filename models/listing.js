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
  },
  location:{
    type: String,
  },
  country:{
    type: String,
  }
})
const Listing = mongoose.model("Listing",listingSchema);
modules.export = Listing;