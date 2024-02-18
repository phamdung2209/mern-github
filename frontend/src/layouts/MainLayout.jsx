// import Footer from './Footer'
import Sidebar from './Sidebar'
import PropTypes from 'prop-types'

const MainLayout = ({ children }) => {
    return (
        <div className="flex text-white">
            <Sidebar />
            <div className="max-w-5xl text-white mx-auto transition-all duration-300 flex-1">{children}</div>
            {/* <Footer /> */}
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout
