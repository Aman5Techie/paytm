const express = require("express")
const controller = require("../controllers/account");
const { auth_middleware } = require("../middlewares/middleware");
const router = express.Router();
router.use(auth_middleware)
router.get("/balance",controller.balance)
router.post("/transfer",controller.transfer)

module.exports = router