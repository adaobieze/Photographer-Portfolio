import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-primary text-white flex justify-between items-center py-6 px-16 relative mobile:p-5 mobile:grid mobile:gap-4 mobile:grid-cols-3 mobile:text-center'>
            <section className='mobile:text-xs'>
                <ul>
                    <li>
                        Contact Us On:
                    </li>
                    <li>
                        <a href='tel:+2349012345678'>
                            +234 (901) 2345678
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            hello@summit-photography.com
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <a href='/'>
                    <h2 className='font-bold text-xl text-center mobile:text-base'>
                        Summit Photography
                    </h2>
                </a>
            </section>
            <section className='mobile:text-xs'>
                <ul>
                    <li>
                        We're Social!:
                    </li>
                    <li className='flex justify-around font-medium'>
                        <a href='/'>
                            <i className="uit uit-twitter-alt"></i>
                        </a>
                        <a href='/'>
                            <i className="uit uit-facebook-f"></i>
                        </a>
                        <a href='/'>
                            <i className="uit uit-behance-alt"></i>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    );
};
  
export default Footer;