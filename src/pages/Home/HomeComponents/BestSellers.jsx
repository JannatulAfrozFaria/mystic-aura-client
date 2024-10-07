import PefumeData from '/src/perfumes.json'

const BestSellers = () => {
    const perfumes = PefumeData.perfumes;
    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
                {perfumes.slice(40,48).map((perfume)=>
                <div key={perfume.id} className='grid grid-cols-5 gap-4'>
                    <div className='col-span-2'>
                        <img src={perfume.image} alt="perfume_image" />
                    </div>
                    <div className='col-span-3'>
                        <h1> {perfume.name} </h1>
                        <p><span>Brand:</span> {perfume.brandName} </p>
                        <p><span>Origin:</span> {perfume.origin} </p>
                        <p><span>Made for:</span> {perfume.userGroup} </p>
                        <div className='flex gap-1'><p>Price:</p> $ <span>{perfume.price}</span>  </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default BestSellers;