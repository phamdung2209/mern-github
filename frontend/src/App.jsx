import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'

import { publicRoutes, privateRoutes } from './routes'
import config from './config'
import MainLayout from './layouts/MainLayout'

function App() {
    const isAuthenticated = false
    return (
        <>
            <Router>
                <Routes>
                    {isAuthenticated
                        ? privateRoutes.map((route, index) => {
                              let Page = route.component
                              const paths = privateRoutes.map((route) => route.path)

                              if (!paths.includes(window.location.pathname)) {
                                  window.location.href = config.routes.home
                              }

                              return <Route key={index} path={route.path} element={<Page />} />
                          })
                        : publicRoutes.map((route, index) => {
                              let Page = route.component
                              let Layout = MainLayout

                              if (route.layout) {
                                  Layout = route.layout
                              } else if (route.layout === null) {
                                  Layout = Fragment
                              }

                              const paths = publicRoutes.map((route) => route.path)

                              if (!paths.includes(window.location.pathname)) {
                                  window.location.href = config.routes.login
                              }

                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout>
                                              <Page />
                                          </Layout>
                                      }
                                  />
                              )
                          })}
                </Routes>
            </Router>
        </>
    )
}

export default App
