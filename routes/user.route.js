const express = require("express");
const { getAllUser, getRandomUser, saveAUser } = require("../userController/user.controller");
const router = express.Router()

router.route('/all').get(getAllUser).post(saveAUser)
// get random tool
router.route("/random").get(getRandomUser);

module.exports = router;