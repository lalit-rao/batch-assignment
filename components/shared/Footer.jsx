import Link from "next/link";
import Image from "next/image";
import {logo, mail, phone} from "../../public/assets/images";
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='max-container bg-[#ffffff] max-w-[80%] mx-auto'>
            <div className='flex pt-6 justify-between items-start gap-20 flex-wrap max-lg:flex-col max-w-[90%] mx-auto'>
                <div className='flex flex-col items-center'>
                    <div className="flex items-center mb-4">
                        <Link href='/'>
                            <Image
                                src={logo}
                                alt='logo'
                                width={117}
                                height={34}
                                className='m-0'
                            />
                        </Link>
                    </div>
                    <div className="flex flex-row ml-10 mb-4">
                        <Image src={mail} alt="mail"/>
                        <p className="ml-2">Help@Frybix.Com</p>
                    </div>
                    <div className="flex flex-row ml-10">
                        <Image src={phone} alt="phone"/>
                        <p className="ml-2">+1 234 456 678 89</p>
                    </div>
                </div>

                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                    <div>
                        <p className="text-[32px] font-semibold mb-4">Links</p>
                        <p className="text-[16px] font-medium mb-4">Home</p>
                        <p className="text-[16px] font-medium mb-4">About Us</p>
                        <p className="text-[16px] font-medium mb-4">Bookings</p>
                        <p className="text-[16px] font-medium mb-4">Blogs</p>
                    </div>
                    <div>
                        <p className="text-[32px] font-semibold mb-4">Legal</p>
                        <p className="text-[16px] font-medium mb-4">Terms of Use</p>
                        <p className="text-[16px] font-medium mb-4">Privacy Policy</p>
                        <p className="text-[16px] font-medium mb-4">Cookie Policy</p>
                    </div>
                    <div>
                        <p className="text-[32px] font-semibold mb-4">Product</p>
                        <p className="text-[16px] font-medium mb-4">Take Tour</p>
                        <p className="text-[16px] font-medium mb-4">Live Chat</p>
                        <p className="text-[16px] font-medium mb-4">Reviews</p>
                    </div>
                    <div>
                        <p className="text-[32px] font-semibold mb-4">Newsletter</p>
                        <p className="text-[16px] font-medium mb-4">Stay up to date</p>
                        <div>
                            <input type="email" placeholder="Your Email" className="w-[170px] h-[61px] pl-2"/>
                            <button className="bg-black text-white w-[170px] h-[61px]">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[70%] mx-auto mt-12 mb-6">
                <hr/>
            </div>
            <div className="footer-container mb-16">
                <p className="text-[16px] font-medium text-center">Copyright 2022 uifry.com all rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;