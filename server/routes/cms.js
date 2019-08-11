const express = require('express');
const router = express.Router();
const CmsController = require('../controller/CmsController');
const checkAuth = require('../middleware/check-auth');

router.get('/', checkAuth, CmsController.get_all);

router.post('/addCms',  checkAuth, CmsController.addCms);

router.get('/get_single_cms/:cmsId', checkAuth, CmsController.get_single_cms);

router.patch('/update_cms/:cmsId',  checkAuth, CmsController.update_cms);

router.delete('/delete_cms/:cmsId',  checkAuth, CmsController.delete_cms);

module.exports = router;
