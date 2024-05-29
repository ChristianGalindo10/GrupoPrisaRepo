import React, { useState, useEffect } from 'react';
import { archivo } from "./archivo";
import MenuItems from "./MenuItems";
import { Link } from 'react-router-dom';
import './Navbar.css';
import icon from "../../assets/icons/Prisa.png";

const NavbarS = () => {
    return (
        <>
            <header id='header1'>
                <div className='header-img' >
                    <Link to={'/'}>
                        {/* <Link to={'/construyendo civilidad/ La responsabilidad social de la Sociedad de Mejoras y Ornato de Bogotá'}> */}
                        <img src={icon} style={{ width: '18rem' }} />
                    </Link>

                </div>
                <div className='header-title'>
                    <h1 style={{ fontFamily: 'serif', fontWeight: '100', fontSize: '3em' }}>Grupo PRISA
                    </h1>
                </div>
            </header>
            <nav className="nv">
                <ul className="menus">
                    {
                        archivo.map((menu, index) => {
                            const dephtlevel = 0;
                            return <MenuItems items={menu} key={index} dephtlevel={dephtlevel} />
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavbarS;