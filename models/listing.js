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
    set: (v) => v === " "?"https://unsplash.com/photos/a-living-room-filled-with-furniture-and-lots-of-windows-bw0UE0UOIwo": v,
  },
  price:{
    type: Number,
   
  },
  location:{
    type: String,
   
  },
  country:{
    type: String,
    
  },
  reviews:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"

    },
  ]
})
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;