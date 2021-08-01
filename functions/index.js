const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JJI2mSBoXuagvd5PdlnoSPIphf5SKDvGAZMRis5YG40DgKzzLw9zrN8n6m8PT15nvOTPxEr0KtORzCW7YEjVJ4w00sCJ6Qwjy"
);

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

app.use(`/.netlify/functions/api`, router);

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "rupee",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = app;
module.exports.handler = serverless(app);

exports.api = functions.https.onRequest(app);
app.listen(5000);

// http://localhost:8888/
