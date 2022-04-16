import NavLink from '../NavLink/NavLink';
import './Nav.scss';
import {HiMenuAlt3 as ModalOpen} from 'react-icons/hi';
import {CgClose as ModalClose} from 'react-icons/cg';
import MenuModal from '../MenuModal/MenuModal';
import { useEffect, useRef, useState } from 'react';

const Nav = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(false);

    const handleModalOpen = () => {
        if (!isModalOpen) {
            setIsModalOpen(true)
            modalRef.current.style.display = "flex";
        }
    }

    const handleModalClose = () => {
        if (isModalOpen) {
            setIsModalOpen(false)
            modalRef.current.style.display = "none";
        }
    }

    useEffect(() => {

        const modalCloseOnEscape = (e) => {
          if(e.keyCode === 27){
            setIsModalOpen(false)
            modalRef.current.style.display = "none";
          }
        }

        window.addEventListener('keydown', modalCloseOnEscape)

      return () => window.removeEventListener('keydown', modalCloseOnEscape)

    },[])

    return (
        <nav>
                {/* Switches icons based on modal visibility state*/}
                {isModalOpen ?
                    <button 
                        onClick={handleModalClose}
                        className='toggle-menu-modal-button'
                    >
                        <ModalClose className='toggle-menu-modal-icon'/>
                    </button>
                    :
                    <button 
                        onClick={handleModalOpen}
                        className='toggle-menu-modal-button'
                    >
                        <ModalOpen className='toggle-menu-modal-icon'/>
                    </button>
                }

            <MenuModal 
                modalRef={modalRef} 
            >
                <NavLink id="landing-page" text={"Home"}/>
                <NavLink id="about-page" text={"About"}/>
                <NavLink id="projects-page" text={"Projects"}/>
                <NavLink id="contact" text={"Contact"}/>
            </MenuModal>

        </nav>
    )
}

export default Nav;