import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className= 'footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the way of the jedi 
                </p>
                <p className="footer-subscription-text">
                    You can unsubscirbe at any time
                </p>
                <div className="iput-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>    
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About US </h2>
                        <Link to='/sign-up'>How it Works</Link> 
                        <link to='/'>test</link>
                        <link to='/'>test 2</link>
                        <link to='/'>test 3</link>
                        <link to='/'>test 4</link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About US </h2>
                        <Link to='/sign-up'>How it Works</Link> 
                        <link to='/'>test</link>
                        <link to='/'>test 2</link>
                        <link to='/'>test 3</link>
                        <link to='/'>test 4</link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About US </h2>
                        <Link to='/sign-up'>How it Works</Link> 
                        <link to='/'>test</link>
                        <link to='/'>test 2</link>
                        <link to='/'>test 3</link>
                        <link to='/'>test 4</link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About US </h2>
                        <Link to='/sign-up'>How it Works</Link> 
                        <link to='/'>test</link>
                        <link to='/'>test 2</link>
                        <link to='/'>test 3</link>
                        <link to='/'>test 4</link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

