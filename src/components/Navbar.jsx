import React from 'react';
import ButtonAnimatedGradient from './Button';

const Navbar = () => {
    

    return (
        <>
            <div className='relative flex items-center my-6 mycontainer h-full overflow-hidden rounded-full p-[2px] '>
                {/* Rotating gradient background */}
                <span className='absolute inset-[-10000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />

                {/* Navbar content */}
                <nav className='w-full rounded-full bg-slate-950 px-8 py-5 text-white backdrop-blur-3xl '>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#e9e7f7] via-[#9c91ed] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-3xl font-extrabold text-transparent font-kanit'>
                            &lt;SaveIT/&gt;
                        </span>

                        {/* Hamburger Icon for mobile view */}
                        <div className="md:hidden">
                        <a href="" target='_blank'>
                                <img className='invert w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-200 hover:text-violet-500' src="/icons/github.svg" alt="" />
                            </a>
                        </div>

                        {/* Navbar Links */}
                        <ul className={`md:flex gap-5 text-lg text-violet-100 items-center ${'hidden'} md:block`}>
                            <ButtonAnimatedGradient text="Home" />
                            <ButtonAnimatedGradient text="Sign In" />
                            <a href="" target='_blank'>
                                <img className='invert w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-200 hover:text-violet-500' src="/icons/github.svg" alt="" />
                            </a>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
