"use client";

import "./Header.css";
import {logo} from "../../public/assets/images/index";
import Link from "next/link";
import Image from "next/image";
import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        // <header className="flex justify-between header">
        <header className="header md:flex md:justify-between md:items-center z-[1000]">
            <div className="flex flex-row navbarr justify-between z-[1000]">
                <a href="/">
                    <Image
                        className="logoContainer"
                        src={logo}
                        alt="logo"
                        height={34}
                        priority
                    />
                </a>
                <nav ref={navRef} className="text-change">
                    <Link className="text-[#ff5555] ml-8" href="/">
                        Home
                    </Link>
                    <Link className="font-poppins text-black" href="/">
                        About us
                    </Link>
                    <Link className="font-poppins text-black" href="/">
                        Pricing
                    </Link>
                    <Link className="font-poppins text-black" href="/">
                        Features
                    </Link>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <div>
                    <button
                        className="h-[50px] rounded-[4px] w-[150px] bg-black text-[14px] text-white flex flex-row justify-center items-center align-middle">
                        Download
                    </button>
                </div>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    );
}

export default Navbar;