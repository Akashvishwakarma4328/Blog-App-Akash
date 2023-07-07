import React from 'react'
import Header from './Header'
import Post from './Post'
import IndexPage from '../Pages/IndexPage'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <main>
                <Header />
                
                {/* <IndexPage /> */}

                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
