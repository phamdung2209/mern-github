import express from 'express'
import * as userController from '../controllers/user.controller.js'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js'

const router = express.Router()

router.get('/profile/:username', userController.getUserProfile)
router.get('/likes', ensureAuthenticated, userController.getLikes)
router.post('/like/:username', ensureAuthenticated, userController.likeProfile)

export default router
