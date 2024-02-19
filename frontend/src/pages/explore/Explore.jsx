import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { Javascript, Typescript, CPlusPlus, Csharp, Python, Java } from '../../assets/icons'
import Loading from '../../components/Loading'
import { Repos } from '../../components/Repos'

function Explore() {
    // https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10
    const [loading, setLoading] = useState(false)
    const [repos, setRepos] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState('')

    const exploreRepos = async (language) => {
        setSelectedLanguage(language)
        setLoading(true)
        setRepos([])
        try {
            const res = await fetch(
                `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
                {
                    headers: {
                        authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
                    },
                },
            )

            const data = await res.json()
            setRepos(data.items)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="px-4">
            <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
                <h1 className="text-xl font-bold text-center">Explore Popular Repositories</h1>
                <div className="flex flex-wrap gap-2 my-2 justify-center">
                    <span onClick={() => exploreRepos('javascript')}>
                        <Javascript className="h-11 sm:h-20 cursor-pointer" />
                    </span>
                    <span onClick={() => exploreRepos('typescript')}>
                        <Typescript className="h-11 sm:h-20 cursor-pointer" />
                    </span>
                    <span onClick={() => exploreRepos('c++')}>
                        {' '}
                        <CPlusPlus className="h-11 sm:h-20 cursor-pointer" />
                    </span>
                    <span onClick={() => exploreRepos('python')}>
                        <Python className="h-11 sm:h-20 cursor-pointer" />
                    </span>
                    <span onClick={() => exploreRepos('java')}>
                        <Java className="h-11 sm:h-20 cursor-pointer" />
                    </span>
                    <span onClick={() => exploreRepos('c#')}>
                        <Csharp className="h-11 sm:h-20 cursor-pointer" />
                    </span>
                </div>

                {repos.length > 0 && (
                    <h2 className="text-lg font-semibold text-center my-4">
                        <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
                            {selectedLanguage.toUpperCase()}
                        </span>
                        Repositories
                    </h2>
                )}

                {!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}

                {loading && (
                    <div className="flex justify-center items-center">
                        <Loading />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Explore
