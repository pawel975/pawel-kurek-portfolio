import './MenuModal.scss';

const MenuModal = ({children, modalRef}) => {

    return (
        <>
            <div ref={modalRef} className='menu-modal'>
                {children}
            </div>
        </>
    )
}

export default MenuModal;