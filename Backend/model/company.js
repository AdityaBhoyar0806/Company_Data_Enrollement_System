const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName:'string',
  industry : 'string',
  location : 'string'
});

const CompanyModel = mongoose.model('Companydata', CompanySchema);

module.exports = CompanyModel;
