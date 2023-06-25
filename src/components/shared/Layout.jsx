import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <>
            <Navbar/>
            <SideBar/>

            <div className="p-4 mt-10 sm:ml-64 ">
                {<Outlet />}
            </div>

        </>
    )
}

export default Layout