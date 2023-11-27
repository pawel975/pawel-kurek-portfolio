import "./MenuModal.scss";

interface ModalInterface {
  children: React.ReactElement[];
  modalRef: React.MutableRefObject<any>;
}

const MenuModal = ({ children, modalRef }: ModalInterface) => {
  return (
    <>
      <div ref={modalRef} className="menu-modal">
        {children}
      </div>
    </>
  );
};

export default MenuModal;
