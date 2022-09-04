const express = require("express");
const { getAllUser, getRandomUser, saveAUser, updateAUser, deleteAUser } = require("../userController/user.controller");
const router = express.Router()

router.route('/all').get(getAllUser).post(saveAUser)
// get random tool
router.route("/random").get(getRandomUser);
router.route('/update/:id').patch(updateAUser)
router.route('/delete/:id').delete(deleteAUser)

module.exports = router;