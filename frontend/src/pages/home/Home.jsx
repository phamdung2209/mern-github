import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { ProfileInfo } from '../../components/ProfileInfo'
import { Repos } from '../../components/Repos'
import Search from '../../components/Search'
import SortRepos from '../../components/SortRepos'
import Loading from '../../components/Loading'

function Home() {
    const [userProfile, setUserProfile] = useState(null)
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [sortType, setSortType] = useState('recent')

    const getUserProfileAndRepos = useCallback(async (username = 'phamdung2209') => {
        setLoading(true)
        try {
            const res = await fetch(`/api/users/profile/${username}`)
            const { userProfile, repos } = await res.json()

            setUserProfile(userProfile)

            setRepos(repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)))

            return { userProfile, repos }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getUserProfileAndRepos()
    }, [getUserProfileAndRepos])

    const onSearch = async (e, username) => {
        e.preventDefault()
        setLoading(true)
        setRepos([])
        setUserProfile(null)

        const { userProfile, repos } = await getUserProfileAndRepos(username)
        setRepos(repos)
        setUserProfile(userProfile)
        setLoading(false)
        setSortType('recent')
    }

    const onSort = (sortType) => {
        setSortType(sortType)
        switch (sortType) {
            case 'recent':
                setRepos([...repos].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)))
                break
            case 'stars':
                setRepos([...repos].sort((a, b) => b.stargazers_count - a.stargazers_count))
                break
            case 'forks':
                setRepos([...repos].sort((a, b) => b.forks_count - a.forks_count))
                break
            default:
                break
        }
    }

    return (
        <div className="m-4">
            <Search onSearch={onSearch} />
            {repos.length > 0 && !loading && <SortRepos onSort={onSort} sortType={sortType} />}
            <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
                {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
                {!loading && <Repos repos={repos} />}
                {loading && <Loading />}
            </div>
        </div>
    )
}

export default Home
