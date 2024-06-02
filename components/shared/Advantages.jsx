import Image from "next/image";
import {arrow, bell, cube, cube2, hero, hero2, hero3, hero4, star, video} from "@/public/assets/images";
import "./Hero.css"

const Advantages = () => {
    return (
        <div className="hero-container-features mt-12">
            <div className="banner-main-features">
                <div
                    className="banner-left-advantages md:max-w-[49%] md:mx-auto max-w-[90%] mx-auto max-h-[45%] my-auto justify-center">
                    <div>
                        <p className="text-[#FF5555] text-[18px] font-medium">Advantages</p>
                        <p className="text-black text-[48px] font-bold pb-4">Why Choose Uifry?</p>
                        <div className="flex flex-row gap-2 text-[28px] font-semibold mb-8 capitalize">
                            <Image src={bell} alt="star" className="bell"/> Clever Notifications
                        </div>
                        <p className="feature-desc text-[18px] pb-8 capitalize">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                            Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
                </div>
                <div className="hero-middle">
                    <Image
                        src={hero4} alt="image" className="hero-banner-image-advantages"
                    />
                </div>
            </div>
        </div>
    );
};

export default Advantages;