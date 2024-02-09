const { ServiceRegistration } = require("../models/serviceRegistration.model");
const { errorHandler } = require("../utils/errorHandler");
const createServiceRegistration = async (req, res) => {
  const { name, email, phone, serviceId } = req.body;
  try {
    const serviceRegistration = await ServiceRegistration.create({
      name,
      email,
      phone,
      service: serviceId,
    });
    res.status(201).json({
      message: "service registration created succesfully",
      data: serviceRegistration,
      success: true,
      statusCode: 201,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getServiceRegistration = async (req, res) => {
  try {
    const serviceRegistration = await ServiceRegistration.find().populate(
      "service"
    );
    if (!serviceRegistration) {
      return res.status(404).json({
        message: "service not found",
        success: false,
        statusCode: 404,
      });
    }
    return res.status(200).json({
      message: "service registration retrieved succesfully",
      data: serviceRegistration,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
module.exports={
    createServiceRegistration,getServiceRegistration
}
