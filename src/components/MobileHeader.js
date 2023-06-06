import React, { useState }  from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const homeUrl = new URL(window.location.origin);
        homeUrl.hash = `#${sectionId}`;
        window.location.href = homeUrl.toString();
    };

    return (
        <header className='sticky top-0 flex justify-between items-center py-10 px-16 z-[1000] backdrop-blur backdrop-filter mobile:hidden'>
            <section>
                <Link to='/'>
                    <h2 className='font-bold text-2xl hover:scale-105 transition-all duration-300'>
                        Summit Photography
                    </h2>
                </Link>
            </section>
            <section className='w-[40%]'>
                <ul className='flex justify-between'>
                    <li className='cursor-pointer'>
                        <button onClick={() => scrollToSection('home')}>
                            Home
                        </button>
                    </li>

                    <li className='cursor-pointer'>
                        <button onClick={() => scrollToSection('about')}>
                            About
                        </button>
                    </li>

                    <li className='cursor-pointer'>
                        <button onClick={() => scrollToSection('portfolio')}>
                            Portfolio
                        </button>
                    </li>

                    <li className='cursor-pointer'>
                        <button onClick={() => scrollToSection('feedback')}>
                            Feedback
                        </button>
                    </li>

                    <li className='cursor-pointer'>
                        <button onClick={() => scrollToSection('contact')}>
                            Contact
                        </button>
                    </li>
                </ul>
            </section>
            <section>
                <button onClick={openModal} className='border border-black p-2 hover:scale-105 transition-all duration-300'>
                    BOOK A SHOOT
                </button>
            </section>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Book A Shoot"
                className="modal fixed transition-transform transform translalate-x-[50%] translalate-y-[50%] bg-white p-10 rounded-md max-w-[400px] w-full"
                overlayClassName="modal-overlay fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center"
                ariaHideApp={false}
            >
                <BookingModal closeModal={closeModal} />
            </Modal>
        </header>
    );
};

export default Header;
