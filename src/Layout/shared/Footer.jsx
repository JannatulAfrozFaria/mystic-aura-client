import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer bg-black text-pink-200 p-10 grid grid-cols-1 md:grid-cols-5 gap-6 mt-auto ">
            <nav className="col-span-1 md:col-span-2">
                <div className="flex items-start text-pink-200 ">
                    <span>
                        <img className="w-20" src="https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png" alt="mystic-aura-logo" />
                    </span>
                    <div>
                        <h1 className="uppercase protest font-extrabold text-3xl">Mystic Aura</h1>
                        <div className="flex items-center gap-2 w-full">
                            <div>
                                <h1 className="font-semibold">Address:</h1>
                                <h2>1357 Monica - Elysées - Paris</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 w-full">
                    <div className="box w-16 text-center text-2xl  flex justify-center">
                        <IoCallSharp />
                    </div>
                    <div>
                        <h1 className="font-semibold">Call us now:</h1>
                        <h2>0123-456-789</h2>
                    </div>
                </div>
                <div className="flex items-center gap-4 w-full">
                    <div className="box w-16 text-center text-2xl flex justify-center">
                        <IoIosMail />
                    </div>
                    <div>
                        <h1 className="font-semibold">Email:</h1>
                        <h2>contact@support.com</h2>
                    </div>
                </div>
            </nav>
            <nav className="col-span-1">
                <h6 className="uppercase roboto font-extrabold">Company</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Login</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="col-span-1">
                <h6 className="uppercase roboto font-extrabold">Information</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Order Status</a>
                <a className="link link-hover">Condition</a>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy and Policy</a> 
            </nav>
            <form className="col-span-1">
                <h6 className="uppercase roboto font-extrabold">Newsletter</h6>
                <p className="">Get 15% off your next order. Be the first to learn about promotions special events, new arrivals and more.</p>
                <fieldset className="form-control ">
                    <label className="label">
                        <span className="label-text text-basic">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="email"
                            className="input input-bordered join-item w-full md:w-1/2" />
                        <button className="btn btn-basic join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;