// import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-pink-200 p-10">
                <nav>
                    <div className="flex items-start text-pink-200 ">
                        <span>
                            <img className="w-20" src="https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png" alt="mystic-aura-logo" />
                        </span>
                        <div>
                            <h1 className="uppercase protest font-extrabold text-3xl">Mystic Aura</h1>
                            <div className="flex">
                                <div>
                                    <MdLocationOn />
                                </div>
                                <div>
                                    <h1 className="font-semibold">Address:</h1>
                                    <h2>1357 Monica - Elysées - Paris</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex">
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1 className="font-semibold">Address:</h1>
                            <h2>1357 Monica - Elysées - Paris</h2>
                        </div>
                    </div> */}
                    <div className="flex">
                        <div>
                            <IoCallSharp />
                        </div>
                        <div>
                            <h1 className="font-semibold">Call us now:</h1>
                            <h2>0123-456-789</h2>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <IoIosMail />
                        </div>
                        <div>
                            <h1 className="font-semibold">Email:</h1>
                            <h2>contact@support.com</h2>
                        </div>
                    </div>
                </nav>
                <nav>
                    <h6 className="uppercase roboto font-extrabold">Company</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="uppercase roboto font-extrabold">Information</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                {/* <nav>
                    <h6 className="uppercase roboto font-extrabold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> */}
                <form>
                    <h6 className="uppercase roboto font-extrabold">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-basic join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;