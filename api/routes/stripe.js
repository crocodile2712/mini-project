const router = require("express").Router();

const KEY = "sk_test_51LbNACBF5fkwqisUkZSSfUQoo10jlUbrjs7XyVec0o51cizMN3dbiSneTl8zxfRqSCQM66HeAQcP3IGJKgYFzcPa003Ax2nAXx"
const stripe = require("stripe")(KEY);
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;