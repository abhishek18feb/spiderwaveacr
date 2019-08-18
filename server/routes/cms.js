const express = require('express');
const router = express.Router();
const CmsController = require('../controller/CmsController');
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const upload = multer();

router.get('/', checkAuth, CmsController.get_all);

router.post('/addCms',  checkAuth, upload.none(), CmsController.addCms);

router.post('/check_unique',  checkAuth, CmsController.check_unique);

router.get('/get_single_cms/:cmsId', checkAuth, CmsController.get_single_cms);

router.patch('/update_cms/:cmsId',  checkAuth, CmsController.update_cms);

router.delete('/delete_cms/:cmsId',  checkAuth, CmsController.delete_cms);

module.exports = router;
