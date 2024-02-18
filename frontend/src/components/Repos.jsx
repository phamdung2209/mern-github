import { Repo } from './Repo'

export const Repos = () => {
    return (
        <div className={`w-full bg-glass rounded-lg px-8 py-6`}>
            <ol className="relative border-s border-gray-200">
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />

                {/* <p className="flex items-center justify-center h-32 ">No repos found</p> */}
            </ol>
        </div>
    )
}
