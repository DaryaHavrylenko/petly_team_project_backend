const express = require('express');
const router = express.Router();

const { auth: ctrl } = require('../../controllers');
const { auth, upload } = require('../../middleware');

//================ REGISTER USER ================
router.post('/signup', ctrl.signup);

//================ LOGIN USER ================
router.post('/login', ctrl.login);

//================ LOGOUT USER ================
router.get('/logout', auth, ctrl.logout);

//================ UPDATE USER ================
router.patch('/update', auth, upload.single('avatarURL'), ctrl.updateUser);

//================ REFRESH TOKEN =======
router.get('/refresh', ctrl.refresh);

//================ GOOGLE REGISTER USER =======

// router.get('/google', passport.auth("google", {
//   scope: ["email", "profile"],
// }));

// router.get("/google/callback", passport.auth("google", { session: false }), ctrl.google);

module.exports = router;
