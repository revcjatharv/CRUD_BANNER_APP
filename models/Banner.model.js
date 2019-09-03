const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BannerSchema  = new Schema({
    AppName: {type: String, required: true, max: 200},
    DeviceType: {type:String, required: true, max: 100},
    CountryID: {type:String, required: true},
})



module.exports = mongoose.model('Banner', BannerSchema);