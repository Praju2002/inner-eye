
const { Gallery } = require("../models/gallery.model");
const { errorHandler } = require("../utils/errorHandler");
const fs = require("fs");
const createGallery = async (req, res) => {
  // console.log(req.files);
  try {
    let image = req.files;

    let imageLink = image.map(function (image) {
      return {
        image: image.path,
      };
    });
    let response = await Gallery.insertMany(imageLink);
    return res.status(201).json({
      message: "gallery inserted succesfully",
      data: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    return res.status(200).json({
      message: "gallery fetched succesfully",
      data: gallery,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    return errorHandler(error, res);
  }
};

const deleteGallery = async (req, res) => {
  try {
    let imageIds = req?.body?.imageId;
    const gallery = await Gallery.find({
      _id: {
        $in: imageIds,
      },
    });
    // console.log(gallery);
    let del = await Gallery.deleteMany({
      _id: {
        $in: imageIds,
      },
    });

    gallery.forEach(function (gal) {
      console.log(gal.image);
      fs.unlinkSync(gal.image);
    });

    return res.status(404).json({
      message: " image deleted succesfully",
      data: del,
    });
  } catch (error) {
    return errorHandler(error, res);
  }
};

const deleteAll = async (req, res) => {
  try {
    const gal = await Gallery.find();
    // console.log(gal);
    if(gal.length==0){
      return res.status(404).json({
        message: "images not found",
      });
    }
    gal.forEach(function (gall) {
      console.log(gall.image);
      fs.unlinkSync(gall.image);
    });

    const gallery = await Gallery.deleteMany();
    return res.status(404).json({
      message: "All images deleted",
    });
  } catch (error) {
    return errorHandler(error, res);
  }
};

module.exports = {
  createGallery,
  getGallery,
  deleteGallery,
  deleteAll,
};
