const express = require('express');
const router = express.Router();

const banner_controller = require('./../controllers/Banner.controller');

/* create banner */
router.post('/create', banner_controller.banner_create);
router.get('/:id', banner_controller.banner_detail);
router.put('/:id/update', banner_controller.banner_update);
router.delete('/:id/delete', banner_controller.banner_delete);



module.exports - router;
