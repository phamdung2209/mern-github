import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import config from './config'
import { useAuthContext } from './context/AuthContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import Likes from './pages/likes/Likes'
import Explore from './pages/explore/Explore'

function App() {
    const { authUser, loading } = useAuthContext()

    if (loading) return null

    return (
        <>
            <Routes>
                <Route
                    path={config.routes.home}
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />
                <Route
                    path={config.routes.login}
                    element={<MainLayout>{!authUser ? <Login /> : <Navigate to={config.routes.home} />}</MainLayout>}
                />
                <Route
                    path={config.routes.signUp}
                    element={<MainLayout>{!authUser ? <SignUp /> : <Navigate to={config.routes.home} />}</MainLayout>}
                />
                <Route
                    path={config.routes.likes}
                    element={<MainLayout>{authUser ? <Likes /> : <Navigate to={config.routes.login} />}</MainLayout>}
                />
                <Route
                    path={config.routes.explore}
                    element={<MainLayout>{authUser ? <Explore /> : <Navigate to={config.routes.login} />}</MainLayout>}
                />
            </Routes>

            <Toaster />
        </>
    )
}

export default App
