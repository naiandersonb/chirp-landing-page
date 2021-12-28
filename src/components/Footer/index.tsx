import { Link } from 'react-router-dom';

import { BsTwitter } from 'react-icons/bs';

import './styles.scss';

export function Footer() {
    return(
        <footer>
            <div className="container">
            <Link to='/' className='logo'>
                <h2>Chirp.</h2>
            </Link>

            <div className="links">
                <Link to='#'>
                    <BsTwitter/>
                </Link>
                <Link to='#'>
                    Privacy Policy
                </Link>
                <Link to='#'>
                    Terms of Use
                </Link>
            </div>
            </div>
        </footer>
    )
}