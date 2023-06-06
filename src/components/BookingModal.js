import React, { useState } from 'react';

const BookingModal = ({ closeModal }) => {
    const [bookingData, setBookingData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the bookingData (e.g., submit a form, send an API request, etc.)
        console.log('Booking data:', bookingData);
        // Close the modal after processing the booking
        closeModal();
    };

    return (
        <div className='space-y-5'>
            <h2 className='font-semibold text-xl uppercase text-center'>
                Book a Shoot
            </h2>
            <form id="bookingForm" method="POST" className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="text-gray-800 font-semibold">Name</label>
                    <input type="text" id="name" name="name" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary-focus" onChange={handleInputChange} required=""/>
                </div>
                <div>
                    <label htmlFor="email" className="text-gray-800 font-semibold">Email</label>
                    <input type="email" id="email" name="email" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary-focus" onChange={handleInputChange} required=""/>
                </div>
                <div>
                    <label htmlFor="number_of_outfits" className="text-gray-800 font-semibold">Number of outfits</label>
                    <input type="number" id="number_of_outfits" name="number_of_outfits" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary-focus" onChange={handleInputChange} required=""/>
                </div>
                <div className='flex justify-between'>
                    <button
                        type='button'
                        onClick={closeModal}
                        className='bg-transparent hover:bg-red text-black border border-black font-semibold py-2 px-6 rounded-md hover:scale-105 transition-all duration-300'
                    >
                        Close
                    </button>
                    <button
                        type='submit'
                        className='bg-primary hover:bg-primary-focus text-white font-semibold py-2 px-6 rounded-md hover:scale-105 transition-all duration-300'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingModal;
