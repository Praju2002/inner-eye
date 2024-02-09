const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../../middlewares/auth.middleware");
const {
  createService,
  getService,
  updateService,
  deleteService,
} = require("../../controllers/service.controller");
router.route("/").post(verifyJWT, createService).get(getService);
router.route("/:id").patch(updateService).delete(deleteService);
module.exports = router;
