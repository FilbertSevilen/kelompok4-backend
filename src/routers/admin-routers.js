const router = require('express').Router()

const {admin} = require('../controllers');

router.get('/listadmin', admin.getAdmins);
router.post('/login', admin.login);
router.post('/forget-password', admin.sendForgetEmail);
router.post('/reset-password', admin.resetPassword);

module.exports = router