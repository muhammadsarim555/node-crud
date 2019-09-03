var mongoose = require("mongoose");

mongoose.connect("mongodb://sarim:sarim123@ds113063.mlab.com:13063/mytodo");

module.exports = { mongoose };
