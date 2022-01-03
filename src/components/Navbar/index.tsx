import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import cx from 'classnames';

import { Button } from '../Button';

import './styles.scss';

export function Navbar() {

    const [activeMenuMobile, setActiveMenuMobile] = useState<boolean>();

    function handleActiveMenuMobile() {
        setActiveMenuMobile(!activeMenuMobile);
    }

    return (
        <header id="navbar">
            <div className="navbar_container">
                <Link to='/' className='logo'>
                    <h2>Chirp.</h2>
                </Link>
                <div className="hamburger" onClick={handleActiveMenuMobile}>
                    {activeMenuMobile ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
                <nav className={cx(
                    'nav_links',
                    { active: activeMenuMobile }
                )} >
                    <ScrollLink to='hero' onClick={handleActiveMenuMobile}>
                        Home
                    </ScrollLink>
                    <ScrollLink to='price' smooth={true} onClick={handleActiveMenuMobile}>
                        Pricing
                    </ScrollLink>
                    <Link to='#' onClick={handleActiveMenuMobile}>
                        faq
                    </Link>
                    <Link to='#' onClick={handleActiveMenuMobile}>
                        <Button />
                    </Link>
                </nav>

            </div>
        </header>
    )
}