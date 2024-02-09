const router=require('express').Router();
const{ createServiceRegistration,getServiceRegistration}=require("../../controllers/serviceRegistration.contoller")
router.route("/").post(createServiceRegistration).get(getServiceRegistration);
module.exports=router;
