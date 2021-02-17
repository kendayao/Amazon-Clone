require('dotenv').config()
const express = require("express");
const path = require("path");
const compression = require('compression')
const PORT = process.env.PORT || 3001;
const app = express();
const cors=require("cors");
const stripe=require("stripe")(process.env.SECRET_KEY)

// Define middleware here
app.use(compression())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: true}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Stripe Intergration 
app.post('/payments/create', async(request, response)=>{
  const total=request.body.amount
  
  const paymentIntent=await stripe.paymentIntents.create({
      amount:total,
      currency: "usd"
  })
 
  //OK reponse-created payment intent
  response.status(201).send({
      clientSecret:paymentIntent.client_secret,
  })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
