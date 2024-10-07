import PefumeData from '/src/perfumes.json'

const BestSellers = () => {
    const perfumes = PefumeData.perfumes;
    return (
        <div>
            <div className="grid">
                {perfumes.map((perfume)=>
                <div key={perfume.id} className='grid grid-cols-5 gap-4'>
                    <div className='col-span-2'></div>
                    <div className='col-span-3'></div>
                </div>
                )}
            </div>
        </div>
    );
};

export default BestSellers;