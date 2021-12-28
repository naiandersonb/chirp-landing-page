import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Button } from "../Button";

import './styles.scss';

export function Hero() {

    const usersAvatar = [
        {
            imgUrl: require('../../images/userAvatar01.png'),
        },
        {
            imgUrl: require('../../images/userAvatar02.png'),
        },
        {
            imgUrl: require('../../images/userAvatar03.png'),
        },
        {
            imgUrl: require('../../images/userAvatar04.png'),
        },
        {
            imgUrl: require('../../images/userAvatar05.png'),
        },
        {
            imgUrl: require('../../images/userAvatar06.png'),
        },
        {
            imgUrl: require('../../images/userAvatar07.png'),
        },
        {
            imgUrl: require('../../images/userAvatar08.png'),
        },
        {
            imgUrl: require('../../images/userAvatar09.png'),
        },
    ]
    return(
        <main id="hero">
            <div className="hero_content">
                <h1>Twitter analytics taken to a whole new level.</h1>
                <p>
                    Chirp is a suit of Twitter analytics that will help you better understand your audience, which tweets they like, and most importantly, when they are the most active on Twitter.
                </p>
                <div className="btn_and_learnMore">
                    <Button/>
                    <Link to='#'>
                        <span>Learn more</span>
                        <HiArrowNarrowRight/>
                    </Link>
                </div>
                <div className="users_avatar">
                    {usersAvatar.map(user => {
                        return(
                            <>
                                <img src={user.imgUrl} alt="user" className='user_hero_img' />
                            </>
                        )
                    })}

                </div>
                <div className="user_avatar_description">
                    <p>
                        Join <span>195</span> others who have analyzed their fallowers and scheduled <span>1343</span> tweets!
                    </p>
                </div>
            </div>
            <div className="hero_img">
                <img src={require('../../images/HeroImageDesktop.png')} alt="" />
            </div>
        </main>
    )
}