import { BsCheckCircleFill } from 'react-icons/bs';
import { Button } from '../Button';

import './styles.scss';

export function Price() {
    return(
        <section id="price" title='price'>
            <div className="container">
                <h2>One simple price plan</h2>
                <p className='subtitle'>Start growing your Twitter account by analyzing your follower's patterns.</p>
                <div className="price_card">
                    <div className="card_header">
                        <p>Monthly</p>
                        <div className="price">
                            <h3>$9</h3>
                            <span>/mo</span>
                        </div>
                    </div>
                    <div className="card_body">

                        <div className="body_content">
                            <BsCheckCircleFill className='check_icon'/>
                            <p>Unlimited* scheduled tweets and threads.</p>
                        </div>
                        
                        <div className="body_content">
                            <BsCheckCircleFill className='check_icon'/>
                            <p>Schedule up to 3 weeks in advance.</p>
                        </div>
                        
                        <div className="body_content">
                            <BsCheckCircleFill className='check_icon'/>
                            <p>Real-time audience analytics tracking up to 5k followers.</p>
                        </div>
                    
                    </div>
                    
                    <div className="card_footer">
                        <Button/>
                    </div>


                </div>
            </div>
        </section>
    )
}