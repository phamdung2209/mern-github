import express from 'express'
import passport from 'passport'

import { login } from '../controllers/auth.controller.js'

const router = express.Router()

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }))
router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL + '/login' }),
    (req, res) => {
        res.redirect(process.env.CLIENT_BASE_URL)
    },
)
router.get('/check', (req, res) => {
    if (req.isAuthenticated()) {
        res.send({ user: req.user })
        // res.json({ user: req.user })
    } else {
        res.send({ user: null })
    }
})
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.json({ message: 'Logged out' })
    })
})

export default router
