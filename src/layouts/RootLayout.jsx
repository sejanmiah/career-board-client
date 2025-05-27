import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../pages/Home/shared/Navber';
import Footer from '../pages/Home/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;