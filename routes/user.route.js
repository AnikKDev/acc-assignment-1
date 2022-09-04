const express = require("express");
const { getAllUser, getRandomUser, saveAUser, updateAUser } = require("../userController/user.controller");
const router = express.Router()

router.route('/all').get(getAllUser).post(saveAUser)
// get random tool
router.route("/random").get(getRandomUser);
router.route('/update/:id').patch(updateAUser)

module.exports = router;