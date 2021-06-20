const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');

const auth = require('../middleware/auth')
//const authAdmin = require('../middleware/auth')

router.post('/register', userCtrl.Register);
router.post('/login', userCtrl.login);
router.post('/refresh_token', userCtrl.getAccessToken);

router.get('/information',auth,userCtrl.getUserInfor)
router.get('/logout',userCtrl.logout)

module.exports = router