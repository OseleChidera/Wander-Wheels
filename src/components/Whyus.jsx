import React from 'react'

export default function Whyus() {
    return (
        <div className='why-us'>
            <div className="w90">
                <h2 className="why-us-text">
                    why us?
                </h2>
                <p className="why-us-p">
                    Wander Wheels isn’t just a van rental service – it’s a ticket to unforgettable adventures. Our well-maintained vacation vans come fully-equipped for ultimate road trips. Need more reasons? Our top-of-the-line vehicles, friendly customer support, and options for customizations will make your journey spectacularly comfortable!
                </p>
                <div className="socials">
                    <a href='#'><img width="30" height='30' src={require('../images/icons/twitter.png')} alt='twitter' /></a>

                    <a href='#'><img width="30" height="30" src={require('../images/icons/instagram.png')} alt='instagram' /></a>

                    <a href='#'><img width="34" height="33" src={require('../images/icons/facebook.png')} alt='facebook' /></a>

                    <a href='#'><img width="30" height="30" src={require('../images/icons/twitch.png')} alt='twitch' /></a>

                </div>
            </div>
        </div>
    )
}
