import NavLink from "../NavLink/NavLink.tsx";
import "./Nav.scss";
import { HiMenuAlt3 as ModalOpen } from "react-icons/hi";
import { CgClose as ModalClose } from "react-icons/cg";
import MenuModal from "../MenuModal/MenuModal.tsx";
import { useCallback, useEffect, useRef, useState } from "react";

export const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef: React.MutableRefObject<HTMLDivElement | undefined> = useRef();

  const handleModalOpen = () => {
    if (!isModalOpen && modalRef.current) {
      setIsModalOpen(true);
      modalRef.current.style.display = "flex";
    }
  };

  const handleModalClose = useCallback(
    (e) => {
      if (!isModalOpen) return;

      if (!modalRef.current === e.target) {
        setIsModalOpen(false);
        if (modalRef.current) modalRef.current.style.display = "none";
      }
    },
    [isModalOpen]
  );

  const handleEscPress = useCallback((e) => {
    // keyCode for ESC key
    if (e.keyCode === 27) {
      setIsModalOpen(false);
      if (modalRef.current) modalRef.current.style.display = "none";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleEscPress);
    window.addEventListener("click", handleModalClose);

    return () => {
      window.removeEventListener("keydown", handleEscPress);
      window.removeEventListener("click", handleModalClose);
    };
  }, [isModalOpen, handleModalClose, handleEscPress]);

  return (
    <nav>
      {isModalOpen ? (
        <button onClick={handleModalClose} className="toggle-menu-modal-button">
          <ModalClose className="toggle-menu-modal-icon" />
        </button>
      ) : (
        <button onClick={handleModalOpen} className="toggle-menu-modal-button">
          <ModalOpen className="toggle-menu-modal-icon" />
        </button>
      )}

      <MenuModal modalRef={modalRef}>
        <NavLink id="landing-page" text={"Home"} />
        <NavLink id="about-page" text={"About"} />
        <NavLink id="projects-page" text={"Projects"} />
        <NavLink id="courses-page" text={"Courses"} />
        <NavLink id="contact" text={"Contact"} />
      </MenuModal>
    </nav>
  );
};

export default Nav;
