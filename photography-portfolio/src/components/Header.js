import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function handleMenuItemClick() {
        setMenuOpen(false);
        // Handle additional actions when a menu item is clicked
    }

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

    const handleBookNow = () => {
        openModal();
    };

    return (
        <div>
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
                        <button onClick={() => scrollToSection('home')}>Home</button>
                    </li>

                    <li className='cursor-pointer'>
                        <button onClick={() => scrollToSection('about')}>About</button>
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
                    <button
                        onClick={handleBookNow}
                        className='border border-black p-2 hover:scale-105 transition-all duration-300'
                    >
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

            <header className='fixed w-screen top-0 flex justify-between items-center py-10 px-8 z-[1000] backdrop-blur backdrop-filter sm:hidden'>
                <section>
                    <Link to='/'>
                        <h2 className='font-bold text-2xl hover:scale-105 transition-all duration-300'>
                            Summit Photography
                        </h2>
                    </Link>
                </section>

                <section className='relative'  ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='focus:outline-none'
                    >
                        <svg
                            className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`}
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>

                        <svg
                            className={`h-6 w-6 ${menuOpen ? 'block' : 'hidden'}`}
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>

                    {menuOpen && (
                        <div className='absolute top-full right-0 w-[300px]'>
                            <ul className='modal-slide-in bg-white text-black py-2 px-4 shadow-md rounded-md'>
                                <li className='cursor-pointer' onClick={handleMenuItemClick}>
                                    <button className='uppercase text-center w-full border-b border-b-slate-300 py-4' onClick={() => scrollToSection('home')}>Home</button>
                                </li>
                                <li className='cursor-pointer' onClick={handleMenuItemClick}>
                                    <button className='uppercase text-center w-full border-b border-b-slate-300 py-4' onClick={() => scrollToSection('about')}>About</button>
                                </li>
                                <li className='cursor-pointer' onClick={handleMenuItemClick}>
                                    <button className='uppercase text-center w-full border-b border-b-slate-300 py-4' onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                                </li>
                                <li className='cursor-pointer' onClick={handleMenuItemClick}>
                                    <button className='uppercase text-center w-full border-b border-b-slate-300 py-4' onClick={() => scrollToSection('feedback')}>Feedback</button>
                                </li>
                                <li className='cursor-pointer' onClick={handleMenuItemClick}>
                                    <button className='uppercase text-center w-full border-b border-b-slate-300 py-4' onClick={() => scrollToSection('contact')}>Contact</button>
                                </li>
                                <li className='cursor-pointer text-center py-4' onClick={handleMenuItemClick}>
                                    <button 
                                        onClick={handleBookNow}
                                        className='border border-black p-2 hover:scale-105 transition-all duration-300 uppercase'
                                    >
                                        BOOK A SHOOT
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </section>


                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel='Book A Shoot'
                    className='modal fixed transition-transform transform translalate-x-[50%] translalate-y-[50%] bg-white p-10 rounded-md max-w-[400px] w-full'
                    overlayClassName='modal-overlay fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center'
                    ariaHideApp={false}
                >
                    <BookingModal closeModal={closeModal} />
                </Modal>
            </header> 
        </div>
    );
};

export default Header;
