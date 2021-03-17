import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Search from "../components/searchModal";

const SiteHeader = styled.div`
  position: sticky;
  top: 0;
  height: 64px;
  z-index: 500;
  display: flex;
  background: #fff;
  align-items: center;
  .icon {
    padding: 8px;
  }
`;

const Location = styled.div`
  padding-left: 8px;
  .caption {
    font-size: 10px;
    letter-spacing: 0.5;
    margin: 0;
  }

  h4 {
    margin: 0;
    display: grid;
    grid-auto-flow: column;
    place-items: center;

    svg {
      padding-top: 4px;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const CloseBtn = styled.div`
  z-index: 999;
`;

export default function Header() {
  const location = useSelector((state) => state.location);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <SiteHeader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="24px"
        height="24px"
        className="icon"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
      <Location onClick={openModal}>
        <p className="caption">ALAMAT PENGANTARAN</p>
        <h4>
          {location}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f9423a"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </span>
        </h4>
      </Location>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        overlayClassName="lightbox-overlay-dark"
        className="modal-content-light"
      >
        <CloseBtn
          className="btn-lightbox-close"
          onClick={closeModal}
        ></CloseBtn>
        <Search closeModal={closeModal} />
      </Modal>
    </SiteHeader>
  );
}
