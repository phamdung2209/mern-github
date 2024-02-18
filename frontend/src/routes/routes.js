import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/signUp/SignUp'
import Explore from '../pages/explore/Explore'
import Likes from '../pages/likes/Likes'
import MainLayout from '../layouts/MainLayout'

export const publicRoutes = [
    { path: '/', component: Home, exact: true },
    { path: '/login', component: Login, exact: true, layout: MainLayout },
    { path: '/sign-up', component: SignUp, exact: true },
    { path: '/explore', component: Explore, exact: true },
    { path: '/likes', component: Likes, exact: true },
]

export const privateRoutes = [{ path: '/', component: Home, exact: true }]
