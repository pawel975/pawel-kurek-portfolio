import { useState } from 'react';
import './Footer.scss';
import {MdConnectWithoutContact as ContactIcon} from 'react-icons/md';
import {AiFillGithub as GithubLink} from 'react-icons/ai';
import {MdEmail as Mail} from 'react-icons/md';
import PopupMessage from '../PopupMessage/PopupMessage';

const Footer = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const copyToClipboard = () => {
        const copiedText = 'pawel.kurek975@gmail.com';
        navigator.clipboard.writeText(copiedText);

        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 3000)

    }

    return (
        <footer id='contact'>
            <header className='contact-header'>
                <p>Contact me</p>
                <ContactIcon className='contact-icon'/>
            </header>
            <div className='contact-links'>
                <div className='contact-link-wrapper'>
                    <a 
                        href='https://github.com/pawel975'
                        target="_blank" 
                        rel="noreferrer"
                        className='github-link'
                    >
                        <GithubLink className='github'/>
                        <p>pawel975</p>
                    </a>
                </div>
                <div className='contact-link-wrapper'>
                    <div  
                        onClick={copyToClipboard}
                        className='copy-email'
                    >
                        <Mail  
                            className='email'
                            />
                        <p>pawel.kurek975@gmail.com</p>
                    </div>
                </div>
            </div>
            {isPopupVisible && <PopupMessage text={'e-mail copied to clipboard'}/>}
        </footer>
    )
}

export default Footer;