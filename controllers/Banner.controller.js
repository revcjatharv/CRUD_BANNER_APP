const Banner= require('./../models/Banner.model');

exports.banner_create = function(req, res) {
    let banner = new Banner({
        AppName: req.body.AppName,
        DeviceType: req.body.DeviceType,
        CountryID: req.body.CountryID
    });

    banner.save(function(err) {
        if(err) {
            return next(err);
        }
        res.send('Product created')
    })
}


exports.banner_detail = function(req,res) {
    Banner.findById(req.params.id, function(err, banner) {
        if(err) return next(err);

        res.send(banner)
    })
}

exports.banner_update = function(req, res) {
    Banner.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, banner) {
        if(err) return next(err);

        res.send("product updates scucces!!");
    })
}

exports.banner_delete = function(req, res) {
    Banner.findByIdAndRemove(req.params.id, function(err, banner) {
        if(err) return next(err);

        res.send("Delete sccussfully!!");
    })
}