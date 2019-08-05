var express = require('express');
var router = express.Router();
var SiteSettingController = require('../controller/SiteSettingController');
var check_auth = require('../middleware/check-auth');
const path = require('path')
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/logo')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })
/* GET users listing. */
router.post('/update_site_setting', check_auth,upload.single('logo'), SiteSettingController.update_site_setting);


module.exports = router;