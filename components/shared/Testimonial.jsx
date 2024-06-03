import Image from "next/image";
import {
    arrow,
    bell,
    cube,
    cube2,
    hero,
    hero2,
    hero3,
    hero4,
    hero5,
    star,
    starr,
    testimonialImage, tooltip,
    video
} from "@/public/assets/images";
import "./Hero.css"

const Testimonial = () => {
    return (
        <>
            <div className="hero-container-testimonial md:flex flex-row flex flex-col min-h-[140vh]">
            <div className="text-center max-w-[30%] mx-auto">
                <p className="font-medium text-[18px]">TESTIMONIAL</p>
                <p className="font-bold text-[28px] md:text-[48px]">What our users say about us?</p>
            </div>
            <div>
                <div className="banner-main-features md:flex md:flex-row flex flex-col min-h-[100vh]">
                    <div className="hero-middle">
                        <Image
                            src={testimonialImage} alt="image" className="hero-banner-image-advantages"
                        />
                    </div>
                    <div
                        className="banner-left-advantages md:max-w-[49%] md:mx-auto max-w-[90%] mx-auto max-h-[45%] my-auto justify-center">
                        <div className="max-w-[90%]">
                            <p className="text-black text-[28px] font-semibold capitalize lineer mb-8">the best
                                financial accounting app ever!</p>
                            <p className="feature-desc text-[18px] pb-8 capitalize lineeerr">“Arcu at dictum sapien,
                                mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam
                                odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam
                                suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
                                suspendisse aliquam.”</p>
                            <div>
                                <Image src={tooltip} alt="tooltip" className="tooltip mb-2"/>
                                <p className="font-semibold">Nick Jonas</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;