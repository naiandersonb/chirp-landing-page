import { Link } from 'react-router-dom';
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

    return(
        <header id="navbar">
            <Link to='/' className='logo'>
                <h2>Chirp.</h2>
            </Link>
            <div className="hamburger" onClick={handleActiveMenuMobile}>
                {activeMenuMobile ? <AiOutlineClose/> : <AiOutlineMenu/> }
            </div>
            <nav className={cx(
                'nav_links', 
                { active: activeMenuMobile }
            )} >
                <Link to='/'>
                    Home
                </Link>
                <Link to='#'>
                    Pricing
                </Link>
                <Link to='#'>
                    faq
                </Link>
                <Link to='#'>
                    <Button/>
                </Link>
            </nav>
        </header>
    )
}