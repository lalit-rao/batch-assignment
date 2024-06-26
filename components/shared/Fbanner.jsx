import Image from "next/image";
import {fbanner} from "@/public/assets/images";

const Fbanner = () => {
    return (
        <div className="md:h-100vh mb-20">
            <Image src={fbanner} alt="image" className="w-full h-[300px] md:h-[600px]"/>
        </div>
    );
};

export default Fbanner;