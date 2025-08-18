import React from 'react'
import { Link,NavLink } from "react-router";
import { FcAbout } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";
import pImg from '../../assets/p.png';
import { UserButton, UserProfile, SignedIn, SignedOut } from '@clerk/clerk-react';
    
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 lg:px-6 py-2.5 text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <span className="nosifer-regular prisma-brand text-3xl font-extrabold tracking-wide italic drop-shadow-lg select-none">
                            PRISMA
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <SignedOut>
                            <a
                                href="https://just-macaque-27.accounts.dev/sign-in"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center"
                            >
                                <BsFillPersonFill className="text-2xl lg:text-3xl" />
                            </a>
                        </SignedOut>
                        <SignedIn>
                            <div className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center">
                                <UserButton/>
                            </div>
                        </SignedIn>
                        {/* <UserProfile/> */}

                        <Link
                            to="/about"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center"
                        >
                            <FcAbout className="text-2xl lg:text-3xl" />
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                    </div>
                </div>
            </nav>
        </header>
    );
}