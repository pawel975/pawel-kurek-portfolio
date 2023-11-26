import NavLink from "../NavLink/NavLink";
import "./Nav.scss";
import { HiMenuAlt3 as ModalOpen } from "react-icons/hi";
import { CgClose as ModalClose } from "react-icons/cg";
import MenuModal from "../MenuModal/MenuModal";
import { useCallback, useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const btnOpenRef = useRef();

  const handleModalOpen = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      modalRef.current.style.display = "flex";
    }
  };

  const handleModalClose = useCallback(
    (e) => {
      if (!isModalOpen) return;

      if (
        !(modalRef.current === e.target) &&
        !(btnOpenRef.current === e.target)
      ) {
        setIsModalOpen(false);
        modalRef.current.style.display = "none";
      }
    },
    [isModalOpen],
  );

  const handleEscPress = useCallback((e) => {
    if (e.keyCode === 27) {
      setIsModalOpen(false);
      modalRef.current.style.display = "none";
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
      {/* Switches icons based on modal visibility state*/}
      {isModalOpen ? (
        <button onClick={handleModalClose} className="toggle-menu-modal-button">
          <ModalClose className="toggle-menu-modal-icon" />
        </button>
      ) : (
        <button
          ref={btnOpenRef}
          onClick={handleModalOpen}
          className="toggle-menu-modal-button"
        >
          <ModalOpen className="toggle-menu-modal-icon" />
        </button>
      )}

      <MenuModal modalRef={modalRef}>
        <NavLink id="landing-page" text={"Home"} />
        <NavLink id="about-page" text={"About"} />
        <NavLink id="projects-page" text={"Projects"} />
        <NavLink id="contact" text={"Contact"} />
      </MenuModal>
    </nav>
  );
};

export default Nav;
