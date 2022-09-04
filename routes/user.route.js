const express = require("express");
const { getAllUser, getRandomUser } = require("../userController/user.controller");
const router = express.Router()

router.route('/all').get(getAllUser)
// get random tool
router.route("/random").get(getRandomUser);

module.exports = router;