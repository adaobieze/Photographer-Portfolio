import React, { useState } from 'react';
import Swal from 'sweetalert2';
import FeedbackSection from '../components/Feedback-Section';
import PortfolioSection from '../components/PortfolioSection';
import Modal from 'react-modal';
import BookingModal from '../components/BookingModal';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleBookNow = () => {
        openModal();
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const message = event.target.elements.message.value;

        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields',
                confirmButtonColor: '#594E42',
            });
            return;
        }

        if (!isValidEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email',
                text: 'Please enter a valid email address',
            });
            return;
        }

        // Additional validation logic...

        // Submit the form or perform further actions

        // Clear the form fields after successful submission (optional)
        event.target.reset();

        // Show a success message (optional)
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent',
            confirmButtonColor: '#594E42',
        });
    };

    const isValidEmail = (email) => {
        // Use a regular expression or any other email validation logic here
        // Return true if the email is valid, false otherwise
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className='mobile:w-screen'>
            <section id='home' className='w-full h-screen -mt-32 flex flex-col items-center justify-center space-y-4 mobile:w-full mobile:-mt-4' style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
                <h1 className='text-5xl font-semibold mobile:text-3xl'>
                    Summit Photography
                </h1>
                <p className='text-xl font-normal'>
                    Peak Performance in Visual Artistry
                </p>
                <button onClick={handleBookNow} className='flex items-center'>
                    <div className='border border-black rounded-[100%] w-16 h-16'>

                    </div>
                    <p className='-ml-6 uppercase'>
                        Book A Shoot &#10230;
                    </p>
                </button>
            </section>

            <section id='about' className='p-8 flex mobile:flex-col mobile:justify-center justify-between items-center'>
                <div className='w-1/2 mobile:w-full mobile:pr-8 mobile:text-justify'>
                    <h2 className='font-semibold text-3xl uppercase mobile:text-center'>
                        About
                    </h2>
                    <p>
                        With a passion for storytelling and an artistic eye, we strive to deliver captivating images that truly reflect the emotions and essence of each individual or occasion.
                    </p>
                    <p>
                        We believe in building genuine connections and understanding your unique vision, ensuring that every photograph reflects your style and personality. Whether it's a portrait session, a special event, or a beautiful landscape, we aim to go above and beyond to exceed your expectations and deliver stunning, timeless images.
                    </p>
                    <p>
                        Let's collaborate and create beautiful memories together. We would be honored to be a part of your journey and help you preserve those precious moments that will be treasured for a lifetime.
                    </p>
                </div>
                <div className='flex mobile:mt-5'>
                    <img src='https://media.istockphoto.com/id/1297743832/photo/beautiful-ballerina-in-pointe-shoes-is-posing.jpg?s=612x612&w=0&k=20&c=i9tJXbZGVFTcXdZx7g4e1kB8T4xZnlzf9rExPIjcuSA=' className='h-auto w-80 border-[30px] border-white relative left-20 top-28 z-10 mobile:w-40 mobile:border-[15px] mobile:left-10 mobile:top-14' alt="aboutImage1"/>
                    <img src='https://media.istockphoto.com/id/486273352/photo/sexual-female-athlete-posing-with-rope.jpg?s=612x612&w=0&k=20&c=_ta7HDgnrM_1VMRu5CzBf-RqiIcI_T8JYK48fGQapqg=' className='h-auto w-80 relative ml-auto mr-auto mobile:w-40' alt="aboutImage2"/>
                </div> 
            </section>

            <PortfolioSection />
            
            <FeedbackSection />

            <section id='contact' className='w-full h-screen -mt-32 flex flex-col items-center justify-center space-y-4 mobile:w-full mobile:-mt-40' style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1658691218556-363a395c962c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')", 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="max-w-[50%] w-full">
                    <h2 className='font-semibold text-3xl uppercase text-center mb-14'>
                        Contact Us
                    </h2>
                    <form id="contactForm" method="POST" className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="text-gray-800 font-semibold">Name</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary-focus" required=""/>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-gray-800 font-semibold">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary-focus" required=""/>
                        </div>
                        <div>
                            <label htmlFor="message" className="text-gray-800 font-semibold">Message</label>
                            <textarea id="message" name="message" rows="5" className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:border-primary-focus" required=""></textarea>
                        </div>
                        <button type="submit" className="bg-primary hover:bg-primary-focus text-white font-semibold py-2 px-6 rounded-md">Send Message</button>
                    </form>
                </div>
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

        </div>
    );
};

export default Home;  