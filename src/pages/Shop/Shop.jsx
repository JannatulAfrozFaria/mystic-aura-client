

const Shop = () => {
    return (
        <div>
            <div className="relative">
                <img className="h-[50vh] w-full" src="https://i.postimg.cc/XvdM0q9C/shop-b2.png" alt="shop_banner" />
                <h1 className="absolute top-12 p-12 md:p-24 uppercase text-2xl md:text-7xl text-basic">
                        Discover Your Scent with Mystic Aura –{' '} {/* First word of the title */}
                                    <span className='brandSpan'>
                                        <Typewriter
                                            words={['Where Elegance Meets Fragrance']} // Rest of the words joined as a string
                                            loop={true}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={3000}
                                        />
                                    </span>
                                </h1>
            </div>
        </div>
    );
};

export default Shop;