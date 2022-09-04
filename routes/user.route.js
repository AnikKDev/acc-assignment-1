const express = require("express");
const { getAllUser, getRandomUser, saveAUser, updateAUser, deleteAUser, bulkUpdate } = require("../userController/user.controller");
const router = express.Router()

router.route('/all').get(getAllUser).post(saveAUser)
// get random tool
router.route("/random").get(getRandomUser);
router.route('/update/:id').patch(updateAUser)
router.route('/delete/:id').delete(deleteAUser)
router.route('/bulk-update').patch(bulkUpdate)

module.exports = router;