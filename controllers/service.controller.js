const { Service } = require("../models/service.model");
const { errorHandler } = require("../utils/errorHandler");

const createService = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.user);
  try {
    const service = await Service.create({ title, description });
    res.status(201).json({
      message: "service created succesfully",
      data: service,
      success: true,
      statusCode: 201,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getService = async (req, res) => {
  try {
    const services = await Service.find();
    if (!services) {
      return res.status(404).json({
        message: "no services found",
        success: false,
        statusCode: 404,
      });
    }
    res.status(200).json({
      message: "services retrieved",
      data: services,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const services = await Service.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      {
        new: true,
      }
    );
    if (!services) {
      return res.status(404).json({
        message: "no services found",
        success: false,
        statusCode: 404,
      });
    }
    return res.status(200).json({
      message: "services retrieved",
      data: services,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
const deleteService = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const services = await Service.findByIdAndDelete(id);
    if (!services) {
      return res.status(404).json({
        message: "no services found",
        success: false,
        statusCode: 404,
      });
    }
    return res.status(200).json({
      message: "services deleted",
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  createService,
  getService,
  updateService,
  deleteService,
};
