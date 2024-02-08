const router = require("express").Router();
const { createGallery, getGallery, deleteGallery, deleteAll } = require("../../controllers/gallery.controller");
const upload = require("../../middlewares/multer.middleware");
router.route("/").post(upload.array("image", 10), createGallery).get(getGallery);
router.route("/").delete(deleteGallery);
router.route("/all").delete(deleteAll);
module.exports = router;
