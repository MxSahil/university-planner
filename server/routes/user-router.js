const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/user', UserCtrl.createUser);
router.put('/user/:id', UserCtrl.updateUser);
router.delete('/movie/:id', UserCtrl.deleteUser);
router.get('/movie/:id', UserCtrl.getUserById);
router.get('/users', UserCtrl.getUsers);

module.exports = router;