import PefumeData from '/src/perfumes.json'

const BestSellers = () => {
    const perfumes = PefumeData.perfumes;
    return (
        <div>
            <div className="grid">
                {perfumes.map((perfume)=>
                <div key={perfume.id} className='grid grid-cols-5 gap-4'>
                    <div className='col-span-2'>
                        <img src={perfume.image} alt="perfume_image" />
                    </div>
                    <div className='col-span-3'>
                        <h1> {perfume.name} </h1>
                        <p><span>Origin:</span> {perfume.origin} </p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default BestSellers;