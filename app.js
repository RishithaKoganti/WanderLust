if(process.env.NODE_ENV !== "production"){
  require('dotenv').config()
}



const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const Listing = require("./models/listing.js");
const Review = require("./models/review.js");

const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local")
const User = require("./models/user.js");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const listing = require("./routes/listing.js");
const review = require("./routes/review.js");
const user = require("./routes/user.js");
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLASDB_URL;
// View engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// Connect to DB
main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// Validation middleware
function validateListing(req, res, next) {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const message = error.details.map(el => el.message).join(", ");
    throw new ExpressError(message, 400);
  }
  next();
}

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: "mysupercode"
  }
})
store.on("error", function(e){
  console.log("SESSION STORE ERROR", e);
})
const sessionOptions ={
  store,
  secret: "mysupercode",
  resave:false,
  saveUninitialized: true,
  cookie:{
    expires: Date.now()+7*27*60*60*1000,
    maxAge: 7*27*60*60*1000,
    httpOnly:true
  }
};



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.currUser = req.user;
  next();
})

// Root Route
app.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find();
  res.render("listings/index.ejs", { allListings });
}));

app.use("/listings",listing);
app.use("/listings",review);
app.use("/",user);

// app.get("/demouser",async(req,res)=>{
//   let fakeUser = new User({
//     email: "demo@gmail.com",
//     username: "demo"
//   })
//    let registeredUser =  await User.register(fakeUser,"password")
//    res.send(registeredUser);
// })


// 404 handler for all undefined routes
// app.all("*", (req, res, next) => {
//   next(new ExpressError("Page Not Found", 404));
// });

// General error handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { err });
});

// Start the server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
