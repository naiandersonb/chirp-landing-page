import { BsTwitter } from 'react-icons/bs';

import './styles.scss';

export function Button() {
    return(
        <button className='btn'>
            <BsTwitter className='icon'/>
            <span>Sign in with Twitter</span>
        </button>
    )
}