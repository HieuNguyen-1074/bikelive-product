import React from 'react';
import { BsBag } from "react-icons/bs";
import '../css/Header.css'
const Header = () => {
    return (
        <div className = "header">
            <h1>bike<span>live</span></h1>
            <ul className = "header-navbar" >
                
                <li><a href="#">products</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">contact us</a></li>
                 </ul> 
                 <div className= "cart">
               <BsBag className="icon-cart"/>
               <sup>1</sup>
               </div>
        </div>
    );
}

export default Header;
