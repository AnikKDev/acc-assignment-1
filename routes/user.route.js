const express = require("express");
const { getAllUser } = require("../userController/user.controller");
const router = express.Router()

router.route('/all').get(getAllUser)

module.exports = router;