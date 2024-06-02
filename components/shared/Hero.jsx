'use client';  // Ensure this component is treated as a client component

import Image from "next/image";
import {arrow, blowout, hero, hero2, video} from "../../public/assets/images";
import "./Hero.css"

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("features");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero-container">
            <div className="banner-main">
                <div className="banner-left md:pl-20 md:max-w-[50%] md:mx-auto max-w-[90%] mx-auto max-h-[45%] my-auto justify-center">
                    <p className="md:text-[64px] md:font-bold capitalize leading-tight main-text z-20">
                        make the best financial decisions
                    </p>
                    <h3 className="md:text-[18px] capitalize md:font-thin md:mt-6 text-2xl">
                        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                    </h3>
                    <div className="blowout">
                        <Image src={blowout} alt="blowout" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <button
                            className=" flex flex-row bg-black w-[180px] items-center justify-center gap-2 h-12 mt-6 rounded-md text-[18px] text-white"
                            onClick={handleScroll}
                        >
                            Get Started <Image src={arrow} alt="arrow" className="arrow"/>
                        </button>
                        <button
                            className=" flex flex-row w-[180px] items-center justify-center gap-2 h-12 mt-6 text-[18px] text-black"
                        >
                            <Image src={video} alt="video" className="video"/> Watch Video
                        </button>
                    </div>
                    <div>
                        <Image src={hero2} alt="hero2" className="hero2"/>
                    </div>
                </div>
                <div className="hero-middle">
                    <Image
                        src={hero} alt="image" className="hero-banner-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
