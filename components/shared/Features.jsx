import Image from "next/image";
import {cube, cube2, hero3, star} from "@/public/assets/images";
import "./Hero.css"

const Features = () => {
    return (
        <div id="features" className="hero-container-features mt-12">
            <div className="banner-main-features">
                <div className="hero-middle">
                    <Image
                        src={hero3} alt="image" className="hero-banner-image-features"
                    />
                </div>
                <div
                    className="banner-left md:pl-20 md:max-w-[45%] md:mx-auto max-w-[90%] mx-auto max-h-[45%] my-auto justify-center">
                    <div>
                        <p className="text-[#FF5555] text-[18px] font-medium">Features</p>
                        <p className="text-black text-[48px] font-bold pb-4">Uifry Premium</p>
                        <div className="flex flex-row gap-2 text-[18px] font-semibold mb-2 capitalize">
                            <Image src={star} alt="star" className="star"/> Budgeting Intervals
                        </div>
                        <p className="feature-desc text-[18px] pb-8 capitalize">Cum et convallis risus placerat aliquam, nunc.
                            Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className="flex flex-row gap-2 text-[18px] font-semibold mb-2 capitalize">
                            <Image src={cube} alt="star" className="star"/> Budgeting Intervals
                        </div>
                        <p className="feature-desc text-[18px] pb-8 capitalize">Cum et convallis risus placerat aliquam, nunc.
                            Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        <div className="flex flex-row gap-2 text-[18px] font-semibold mb-2 capitalize">
                            <Image src={cube2} alt="star" className="star"/> Budgeting Intervals
                        </div>
                        <p className="feature-desc text-[18px] pb-8 capitalize">Cum et convallis risus placerat aliquam, nunc.
                            Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;