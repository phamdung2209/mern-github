import User from '../models/user.model.js'

export const getUserProfile = async (req, res) => {
    const { username } = req.params
    try {
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
        })

        const userProfile = await userRes.json()

        const repoRes = await fetch(userProfile.repos_url, {
            headers: {
                authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
        })
        const repos = await repoRes.json()

        res.json({
            userProfile,
            repos,
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getLikes = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.json({
            likedBy: user.likedBy,
        })
    } catch (error) {
        res.json({ error: error.message })
    }
}

export const likeProfile = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findById(req.user._id)

        const userToLike = await User.findOne({ username })

        if (!userToLike) {
            return res.json({ message: 'User is not a member' })
        }

        if (user.likedProfiles.includes(userToLike.username)) {
            return res.json({ message: 'User already liked' })
        }

        userToLike.likedBy.push({
            username: user.username,
            avatarUrl: user.avatarUrl,
            likedDate: Date.now(),
        })

        user.likedProfiles.push(userToLike.username)

        // await userToLike.save()
        // await user.save()

        await Promise.all([userToLike.save(), user.save()])

        res.json({ message: 'User liked' })
        console.log('userToLike', userToLike)
    } catch (error) {
        res.json({ error: error.message })
    }
}
