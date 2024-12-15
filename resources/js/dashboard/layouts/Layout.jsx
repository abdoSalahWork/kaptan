import React, {useEffect} from "react";
import Aside from './Aside';
import Wrapper from './Wrapper';
import { usePage } from '@inertiajs/react'
import Header from './Header';
import Footer from './Footer.jsx';
import HTTP from "../helpers/HTTP";
import {Helmet} from "react-helmet";

export default function Layout ({children}) {
    const {activeId} = usePage().props;

    useEffect(() => {

        HTTP.interceptors()

    }, [])

    useEffect(() => {
        document.querySelector(`#menu-nav .menu-item.menu-item-active`)?.classList.remove('menu-item-active');
        let el = document.getElementById(activeId)?.closest('.menu-item').classList.add('menu-item-active');
    })

    return (
        <div id="layout-wrapper">

            <Header/>

            <Aside/>

            <Wrapper>
                {children}
            </Wrapper>

            <Footer/>

            <Helmet>
                <script src="/admin/assets/js/app.js" defer></script>
            </Helmet>
        </div>
    );
}
