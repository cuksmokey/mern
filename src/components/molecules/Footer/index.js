import React from 'react'
import { ICfacebook, ICinstagram, ICtwitter } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <p className="logo">TUTORIAL MERN</p>
                </div>
                <div className="sosial-wrapper">
                    <Icon img={ICfacebook} />
                    <Icon img={ICinstagram} />
                    <Icon img={ICtwitter} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
