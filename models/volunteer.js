const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: { type: String, required:  true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number,required: true },
  WantTo: { type: [String],required: true },
  qualification: { type: String,required: true },
  organization_name: { type: String,required: false },
  aadhaar_number: { type: String,required: true },
  areas_interested: { type: [String],required: true },
  comments: { type: String,required: true },
  pledge: { type: String,required: true },
  payment_ss: { type: String,required: false }
});

module.exports = mongoose.model('volunteer', userSchema);
