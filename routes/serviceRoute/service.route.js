const express=require('express')
const router= express.Router();
const {createService, getService, updateService, deleteService}= require('../../controllers/service.controller');
router.route("/").post(createService).get(getService);
router.route("/:id").patch(updateService).delete(deleteService)
module.exports=router;