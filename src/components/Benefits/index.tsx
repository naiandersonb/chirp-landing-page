import './styles.scss';

export function Benefits() {

    const benefits = [
        {
            iconUrl: require('../../images/analytics.png'),
            title: 'Analytics',
            text: `We constantly monitor your audience as it grows - so you can Tweet your followers are most likely to ne online and ready to engage with your content.`
        },
        
        {
            iconUrl: require('../../images/smartAnalyzer.png'),
            title: 'Smart Analyzer',
            text: `Chirp automatically recognizes your followers' most active times and automatically sends you notifications if you're missing out on an opportunity.`
        },

         {
            iconUrl: require('../../images/yourTweets.png'),
            title: 'Scheduled Your Tweets',
            text: `Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advanced and schedule them when your audience in most likely to read.`
        },

         {
            iconUrl: require('../../images/darkMode.png'),
            title: 'Dark Mode',
            text: `Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times.`
        },
        
    ]

    return(
        <section id="benefits">
            <div className="container">
                <h2>Features that help you Tweet smarter.</h2>
                <div className="card_container">
                    {benefits.map(benefit => {
                        return(
                            <div className='card'>
                                <div className="icon">
                                    <img src={benefit.iconUrl} alt="icon" />
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.text}</p>        
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}