import React,{useEffect} from 'react'
import {Hero} from '../../Components/Hero';
import {store} from '../../app/store';
import {changeLogoSign,
    showNavbar} from '../../features/NavbarLogo/NavbarLogoSlice';
import { WhatWeDo } from '../../Components/WhatWeDo';
export const Home = () => {

    useEffect(() => {
        store.dispatch(changeLogoSign({value:"LOGO"}))
        store.dispatch(showNavbar({show:true}))
    
   

    }, [])
    return (
        <div>
            <Hero/>
            <WhatWeDo/>
            
        </div>
    )
}
