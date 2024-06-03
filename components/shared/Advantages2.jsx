import Image from "next/image";
import {arrow, bell, cube, cube2, hero, hero2, hero3, hero4, hero5, star, starr, video} from "@/public/assets/images";
import "./Hero.css"

const Advantages = () => {
    return (
        <div className="hero-container-features mt-12">
            <div className="banner-main-features md:flex md:flex-row flex flex-col min-h-[140vh]">
                <div className="hero-middle">
                    <Image
                        src={hero5} alt="image" className="hero-banner-image-advantages"
                    />
                </div>
                <div
                    className="banner-left-advantages md:max-w-[49%] md:mx-auto max-w-[90%] mx-auto max-h-[45%] my-auto justify-center">
                    <div>
                        <p className="text-[#FF5555] text-[18px] font-medium">Advantages</p>
                        <p className="text-black text-[28px] md:text-[48px] font-bold pb-4">Why Choose Uifry?</p>
                        <div className="flex flex-row gap-2 text-[20px] md:text-[28px] font-semibold mb-8 capitalize">
                            <Image src={starr} height={30} alt="star" className="bell"/> Fully Customizable
                        </div>
                        <p className="feature-desc text-[18px] pb-8 capitalize">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;