import { BsTwitter } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';

import './styles.scss';

export function Testimonials() {
    
    const testimonials = [
        {
            avatar: require('../../images/userAvatar01.png'),
            name: 'Sara May',
            username: '@sara_may',
            comment: `i just tried out @chirp and it's amazing, love all the analytics i can see.`,
            likes: 7,
            time: 'March 2, 2021',
        },

        {
            avatar: require('../../images/userAvatar07.png'),
            name: 'Jack Scott',
            username: '@jackscott_',
            comment: `I initially started using Chirp to support the co-founder as i personally knew him, but after having tried it out for a few weeks, i can genuinely say this changed my Twitter game.`,
            likes: 32,
            time: 'June 4, 2021',
        },

        {
            avatar: require('../../images/userAvatar06.png'),
            name: 'Jessica May',
            username: '@jmay98',
            comment: `Absolutely love everything about Chirp, from the design to how everything works smoothly.`,
            likes: 2,
            time: 'March 14, 2021',
        }
    ]
    
    return(
        <section id="testimonials">
            <div className="container">
                <h2>What our customers say</h2>
                <div className="tweet_container">
                    {testimonials.map((testimonial, index) =>{
                        return(
                            <div className='tweet_card' key={index} >
                                <div className="card_header">
                                    <div className="avatar">
                                        <img src={testimonial.avatar} alt="avatar" />
                                        <div className="avatar_info">
                                            <h3>{testimonial.name}</h3>
                                            <span>{testimonial.username}</span>
                                        </div>
                                    </div>
                                    <BsTwitter className='icon_header'/>
                                </div>
                                <p>{testimonial.comment}</p>
                                <div className="card_footer">
                                    <div className="likes">
                                        <FiHeart className='icon_footer'/>
                                        <span>{testimonial.likes}</span>
                                    </div>
                                    <p>{testimonial.time}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}