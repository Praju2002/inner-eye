const mongoose = require("mongoose");
const { Schema } = mongoose;
const serviceRegistrationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: "service",
  },
});
const ServiceRegistration = mongoose.model(
  "ServiceRegistration",
  serviceRegistrationSchema
);
module.exports = {
  ServiceRegistration,
};
