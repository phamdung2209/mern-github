import { MdLogout } from 'react-icons/md'

const Logout = () => {
    return (
        <>
            <img
                src="https://avatars.githubusercontent.com/u/119159181?v=4"
                className="w-10 h-10 rounded-full border border-gray-800"
            />

            <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
                <MdLogout size={22} />
            </div>
        </>
    )
}

export default Logout
