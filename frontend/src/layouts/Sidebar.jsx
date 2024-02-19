import { IoHomeSharp } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineExplore } from 'react-icons/md'
import { PiSignInBold } from 'react-icons/pi'
import { MdEditDocument } from 'react-icons/md'

import config from '../config'
import { Link } from 'react-router-dom'
import { GithubSvg } from '../assets/icons'
import Logout from '../components/Logout'

const Sidebar = () => {
    const authUser = true
    return (
        <aside
            className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
        overflow-y-auto border-r bg-glass"
        >
            <nav className="h-full flex flex-col gap-3">
                <Link to={config.routes.home} className="flex justify-center">
                    <GithubSvg />
                </Link>

                <Link
                    to={config.routes.home}
                    className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
                >
                    <IoHomeSharp size={20} />
                </Link>

                {authUser && (
                    <Link
                        to={config.routes.likes}
                        className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
                    >
                        <FaHeart size={22} />
                    </Link>
                )}

                {authUser && (
                    <Link
                        to={config.routes.explore}
                        className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
                    >
                        <MdOutlineExplore size={25} />
                    </Link>
                )}

                {!authUser && (
                    <Link
                        to={config.routes.login}
                        className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
                    >
                        <PiSignInBold size={25} />
                    </Link>
                )}

                {!authUser && (
                    <Link
                        to={config.routes.signUp}
                        className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
                    >
                        <MdEditDocument size={25} />
                    </Link>
                )}

                {authUser && (
                    <div className="flex flex-col gap-2 mt-auto">
                        <Logout />
                    </div>
                )}
            </nav>
        </aside>
    )
}

export default Sidebar