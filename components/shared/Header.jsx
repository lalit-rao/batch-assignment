"use client";

import "./Header.css";
import {logo} from "../../public/assets/images/index";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <header className="flex justify-between header">
            <div className="flex flex-row">
                <a href="/">
                    <Image
                        className="logoContainer"
                        src={logo}
                        alt="logo"
                        height={34}
                        priority
                    />
                </a>
                <nav className="text-change">
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
                </nav>
            </div>
            <div>
                <button
                    className="h-[50px] rounded-[4px] w-[150px] bg-black text-[14px] text-white flex flex-row justify-center items-center align-middle">
                    Download
                </button>
            </div>
        </header>
    );
}

export default Navbar;
