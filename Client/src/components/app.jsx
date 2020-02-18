import React, {useLayoutEffect, useState} from 'react';
import Header from './common/header-component/header';
import Sidebar from './common/sidebar-component/sidebar';
import RightSidebar from './common/right-sidebar';
import Footer from './common/footer';
import ThemeCustomizer from './common/theme-customizer'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './common/loader';






const AppLayout = ({children}) => {

    // const [size, setSize] = useState([0, 0]);
    //
    // if (size[0] > 100 && size[0] < 991) {
    //     console.log("-mobile and tablet");
    //     document.querySelector(".page-wrapper").className = 'page-wrapper default';
    //     document.querySelector(".page-body-wrapper").className = 'page-body-wrapper default';
    //
    // } else {
    //     console.log("-desktop");
    //     document.querySelector(".page-wrapper").className = 'page-wrapper horizontal_sidebar';
    //     document.querySelector(".page-body-wrapper").className = 'page-body-wrapper horizontal_sidebar';
    // }

    return (
        <div>
            <Loader/>
            <div className="page-wrapper horizontal_sidebar" id="page-wrapper">
                <div className="page-body-wrapper horizontal_sidebar" id="page-body-wrapper">
                    <Header/>
                    <Sidebar/>
                    <RightSidebar/>
                    <div className="page-body">
                        {children}
                    </div>
                    <Footer/>
                    <ThemeCustomizer/>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );



}

export default AppLayout;